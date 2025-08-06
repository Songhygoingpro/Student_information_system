<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function index()
    {
        $programs = program::all();
        return response()->json($programs);
    }

    public function show($id)
    {
        $program = program::findOrFail($id);
        return response()->json($program);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:50',
            'description' => 'nullable|string',
            'duration_years' => 'required|integer|min:1|max:10',
            'total_credits' => 'required|integer|min:1',
            'degree_type' => 'required|string|max:255',
            'year' => 'required|integer|min:1|max:10',
            'semester' => 'required|integer|min:1|max:2',
            'subject_name' => 'required|string|max:255',
            'credit' => 'required|integer|min:1'
        ]);

        $program = program::create($validated);
        return response()->json($program, 201);
    }

    public function update(Request $request, $id)
    {
        $program = program::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:50',
            'description' => 'nullable|string',
            'duration_years' => 'required|integer|min:1|max:10',
            'total_credits' => 'required|integer|min:1',
            'degree_type' => 'required|string|max:255',
            'year' => 'required|integer|min:1|max:10',
            'semester' => 'required|integer|min:1|max:2',
            'subject_name' => 'required|string|max:255',
            'credit' => 'required|integer|min:1'
        ]);

        $program->update($validated);
        return response()->json($program);
    }

    public function destroy($id)
    {
        $program = program::findOrFail($id);
        $program->delete();
        return response()->json(null, 204);
    }
}
