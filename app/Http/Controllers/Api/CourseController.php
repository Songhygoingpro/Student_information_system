<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    /**
     * List classes (courses)
     */
    public function index(Request $request): JsonResponse
    {
        $query = Course::query()->select('id', 'room', 'section', 'year', 'description', 'created_at');

        if ($request->filled('room')) {
            $query->where('room', 'LIKE', '%' . $request->room . '%');
        }
        if ($request->filled('section')) {
            $query->where('section', $request->section);
        }
        if ($request->filled('year')) {
            $query->where('year', (int) $request->year);
        }

        $classes = $query->orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'status' => 'success',
            'data' => $classes,
        ]);
    }

    /**
     * Show a single class
     */
    public function show(int $id): JsonResponse
    {
        $course = Course::query()->select('id', 'room', 'section', 'year', 'description', 'created_at', 'updated_at')->find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Class not found',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $course,
        ]);
    }

    /**
     * Create a class (admin only)
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'room' => 'required|string|max:255',
            'section' => 'required|string|max:255',
            'year' => 'required|integer|min:1|max:12',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $course = Course::create($validator->validated());

        return response()->json([
            'status' => 'success',
            'data' => $course,
            'message' => 'Class created',
        ], 201);
    }

    /**
     * Update a class (admin only)
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Class not found',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'room' => 'sometimes|required|string|max:255',
            'section' => 'sometimes|required|string|max:255',
            'year' => 'sometimes|required|integer|min:1|max:12',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $course->update($validator->validated());

        return response()->json([
            'status' => 'success',
            'data' => $course,
            'message' => 'Class updated',
        ]);
    }

    /**
     * Delete a class (admin only)
     */
    public function destroy(int $id): JsonResponse
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Class not found',
            ], 404);
        }

        $course->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Class deleted',
        ]);
    }
}
