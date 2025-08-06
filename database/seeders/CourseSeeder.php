<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Seed multiple classes for variety.
     */
    public function run(): void
    {
        $data = [
            ['room' => 'R3-16', 'section' => 'Morning', 'year' => 1, 'description' => 'First year morning section'],
            ['room' => 'R3-16', 'section' => 'Evening', 'year' => 3, 'description' => 'Third year evening section'],
            ['room' => 'R3-16', 'section' => 'Weekend', 'year' => 3, 'description' => 'Weekend classes'],
            ['room' => 'R3-16', 'section' => 'Afternoon', 'year' => 2, 'description' => 'Second year afternoon section'],
        ];

        foreach ($data as $row) {
            Course::firstOrCreate(
                [
                    'room' => $row['room'],
                    'section' => $row['section'],
                    'year' => $row['year'],
                ],
                [
                    'description' => $row['description'] ?? null,
                ]
            );
        }
    }
}
