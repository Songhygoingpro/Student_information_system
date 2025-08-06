<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Result;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResultController extends Controller
{
    /**
     * List results (filterable by class_id, semester, student_id)
     */
    public function index(Request $request): JsonResponse
    {
        $query = Result::query()
            ->with([
                'course:id,room,section,year',
                'student:id,name,email',
            ]);

        if ($request->filled('class_id')) {
            $query->where('class_id', (int) $request->class_id);
        }
        if ($request->filled('semester')) {
            $query->where('semester', (int) $request->semester);
        }
        if ($request->filled('student_id')) {
            $query->where('student_id', (int) $request->student_id);
        }

        $results = $query->orderBy('created_at', 'desc')->paginate(20);

        return response()->json([
            'status' => 'success',
            'data' => $results,
        ]);
    }

    /**
     * Show a single result row
     */
    public function show(int $id): JsonResponse
    {
        $result = Result::with([
            'course:id,room,section,year,description',
            'student:id,name,email',
        ])->find($id);

        if (!$result) {
            return response()->json([
                'status' => 'error',
                'message' => 'Result not found',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $result,
        ]);
    }

    /**
     * Create a result (admin only)
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'class_id' => 'required|exists:classes,id',
            'student_id' => 'required|exists:users,id',
            'semester' => 'required|integer|min:1|max:2',
            'english' => 'required|integer|min:0|max:100',
            'graphic_design' => 'required|integer|min:0|max:100',
            'network' => 'required|integer|min:0|max:100',
            'java' => 'required|integer|min:0|max:100',
            'php' => 'required|integer|min:0|max:100',
            'status' => 'required|in:Pass,Fail',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();
        $data['total'] = (int) $data['english'] + (int) $data['graphic_design'] + (int) $data['network'] + (int) $data['java'] + (int) $data['php'];

        $result = Result::create($data);

        return response()->json([
            'status' => 'success',
            'data' => $result->load('course:id,room,section,year', 'student:id,name,email'),
            'message' => 'Result created',
        ], 201);
    }

    /**
     * Update a result (admin only)
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $result = Result::find($id);

        if (!$result) {
            return response()->json([
                'status' => 'error',
                'message' => 'Result not found',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'class_id' => 'sometimes|required|exists:classes,id',
            'student_id' => 'sometimes|required|exists:users,id',
            'semester' => 'sometimes|required|integer|min:1|max:2',
            'english' => 'sometimes|required|integer|min:0|max:100',
            'graphic_design' => 'sometimes|required|integer|min:0|max:100',
            'network' => 'sometimes|required|integer|min:0|max:100',
            'java' => 'sometimes|required|integer|min:0|max:100',
            'php' => 'sometimes|required|integer|min:0|max:100',
            'status' => 'sometimes|required|in:Pass,Fail',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();

        // Recalculate total if any subject changed
        $subjects = ['english', 'graphic_design', 'network', 'java', 'php'];
        $changed = false;
        foreach ($subjects as $s) {
            if (array_key_exists($s, $data)) {
                $changed = true;
                break;
            }
        }
        if ($changed) {
            $total = 0;
            foreach ($subjects as $s) {
                $total += (int) ($data[$s] ?? $result->$s);
            }
            $data['total'] = $total;
        }

        $result->update($data);

        return response()->json([
            'status' => 'success',
            'data' => $result->fresh()->load('course:id,room,section,year', 'student:id,name,email'),
            'message' => 'Result updated',
        ]);
    }

    /**
     * Delete a result (admin only)
     */
    public function destroy(int $id): JsonResponse
    {
        $result = Result::find($id);

        if (!$result) {
            return response()->json([
                'status' => 'error',
                'message' => 'Result not found',
            ], 404);
        }

        $result->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Result deleted',
        ]);
    }
}
