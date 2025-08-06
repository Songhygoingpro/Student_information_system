<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProgramController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\ResultController;

Route::get('/test', function () {
    return response()->json([
        'message' => 'Hello from Laravel API!',
        'status' => 'success',
        'timestamp' => now()
    ]);
});

# Public program routes (read-only)
Route::get('/programs', [ProgramController::class, 'index']);
Route::get('/programs/{id}', [ProgramController::class, 'show']);

# Public classes/results (read-only)
Route::get('/classes', [CourseController::class, 'index']);
Route::get('/classes/{id}', [CourseController::class, 'show']);
Route::get('/results', [ResultController::class, 'index']);
Route::get('/results/{id}', [ResultController::class, 'show']);

# Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    Route::get('/me', [UserController::class, 'me']);
    Route::put('/profile', [UserController::class, 'updateProfile']);
    Route::get('/users/search', [UserController::class, 'search']);

    // Admin-only routes (must be authenticated via Sanctum and have role=admin)
    Route::middleware('admin')->group(function () {
        // Example admin-only endpoint
        Route::get('/admin/ping', function () {
            return response()->json(['status' => 'ok', 'role' => 'admin']);
        });

        // Restrict program management to admins
        Route::post('/programs', [ProgramController::class, 'store']);
        Route::put('/programs/{id}', [ProgramController::class, 'update']);
        Route::delete('/programs/{id}', [ProgramController::class, 'destroy']);

        // Classes (courses) admin-only CRUD
        Route::post('/classes', [CourseController::class, 'store']);
        Route::put('/classes/{id}', [CourseController::class, 'update']);
        Route::delete('/classes/{id}', [CourseController::class, 'destroy']);

        // Results admin-only CRUD
        Route::post('/results', [ResultController::class, 'store']);
        Route::put('/results/{id}', [ResultController::class, 'update']);
        Route::delete('/results/{id}', [ResultController::class, 'destroy']);
    });
});

Route::post('/login', function (Request $request) {
    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
    $request->session()->regenerate();
    return response()->json(['message' => 'Login successful']);
});

Route::post('/register', [UserController::class, 'store']);

Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return response()->json(['message' => 'Logged out']);
});
