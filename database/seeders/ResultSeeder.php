<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Result;
use App\Models\User;

class ResultSeeder extends Seeder
{
    /**
     * Seed example results for class R3-16 across sections/years.
     */
    public function run(): void
    {
        // Ensure we have at least two users (admin + a regular user)
        $admin = User::where('email', 'admin@example.com')->first();
        $user1 = User::orderBy('id')->first();

        if (!$admin && !$user1) {
            // No users to seed results for
            return;
        }

        // Pick a few classes to attach results to
        $classes = Course::where('room', 'R3-16')->take(3)->get();

        if ($classes->isEmpty()) {
            return;
        }

        $students = array_values(array_filter([$admin, $user1]));
        $subjectsTemplate = [
            'english' => 38,
            'graphic_design' => 40,
            'network' => 28,
            'java' => 30,
            'php' => 32,
        ];

        foreach ($classes as $class) {
            // Create around 5 rows per class (mix students repeatedly)
            for ($i = 0; $i < 5; $i++) {
                $student = $students[$i % count($students)];

                $scores = $subjectsTemplate;
                // small variation
                $scores['english'] = max(0, min(100, $scores['english'] + ($i % 3)));
                $scores['network'] = max(0, min(100, $scores['network'] + ($i % 2)));

                $total = array_sum($scores);

                Result::create([
                    'class_id' => $class->id,
                    'student_id' => $student->id,
                    'semester' => 1,
                    'english' => $scores['english'],
                    'graphic_design' => $scores['graphic_design'],
                    'network' => $scores['network'],
                    'java' => $scores['java'],
                    'php' => $scores['php'],
                    'total' => $total,
                    'status' => 'Pass',
                ]);
            }
        }
    }
}
