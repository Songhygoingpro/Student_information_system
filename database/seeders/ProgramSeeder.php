<?php

namespace Database\Seeders;

use App\Models\program;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
    public function run(): void
    {
        $programs = [
            // ===== COMPUTER SCIENCE PROGRAM =====
            
            // Year 1 Semester 1
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Introduction to Programming',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Mathematics for Computer Science',
                'credit' => 4
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Computer Architecture',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'English Communication',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Digital Logic Design',
                'credit' => 3
            ],

            // Year 1 Semester 2
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Data Structures and Algorithms',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Object-Oriented Programming',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Discrete Mathematics',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Web Development Fundamentals',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Statistics for Computing',
                'credit' => 3
            ],

            // Year 2 Semester 1
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Database Management Systems',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Computer Networks',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Operating Systems',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Software Engineering',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Linear Algebra',
                'credit' => 3
            ],

            // Year 2 Semester 2
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Artificial Intelligence',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Machine Learning',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Mobile Application Development',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Computer Graphics',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Information Security',
                'credit' => 3
            ],

            // Year 3 Semester 1
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Advanced Algorithms',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Distributed Systems',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Cloud Computing',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Data Mining',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Software Testing',
                'credit' => 3
            ],

            // Year 3 Semester 2
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Natural Language Processing',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Computer Vision',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Big Data Analytics',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Blockchain Technology',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Internet of Things',
                'credit' => 3
            ],

            // Year 4 Semester 1
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Capstone Project I',
                'credit' => 6
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Advanced Software Architecture',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Cybersecurity',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Professional Ethics',
                'credit' => 3
            ],

            // Year 4 Semester 2
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Capstone Project II',
                'credit' => 6
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Research Methods',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Industry Internship',
                'credit' => 3
            ],
            [
                'name' => 'Computer Science',
                'code' => 'CS',
                'description' => 'A comprehensive program covering software development, algorithms, data structures, and computer systems.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Emerging Technologies',
                'credit' => 3
            ],

            // ===== SOFTWARE ENGINEERING PROGRAM =====
            
            // Year 1 Semester 1
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Programming Fundamentals',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Software Engineering Principles',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Mathematics for Engineers',
                'credit' => 4
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 1,
                'subject_name' => 'Computer Systems',
                'credit' => 3
            ],

            // Year 1 Semester 2
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Object-Oriented Design',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Database Systems',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Web Development',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 1,
                'semester' => 2,
                'subject_name' => 'Requirements Engineering',
                'credit' => 3
            ],

            // Year 2 Semester 1
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Software Architecture',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Software Testing',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Project Management',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 1,
                'subject_name' => 'Mobile Development',
                'credit' => 3
            ],

            // Year 2 Semester 2
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'DevOps Practices',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Cloud Computing',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'Microservices Architecture',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 2,
                'semester' => 2,
                'subject_name' => 'User Experience Design',
                'credit' => 3
            ],

            // Year 3 Semester 1
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Advanced Software Design',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Software Security',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Agile Development',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 1,
                'subject_name' => 'Data Engineering',
                'credit' => 3
            ],

            // Year 3 Semester 2
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Machine Learning for Software',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Software Quality Assurance',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Enterprise Software Development',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 3,
                'semester' => 2,
                'subject_name' => 'Software Maintenance',
                'credit' => 3
            ],

            // Year 4 Semester 1
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Capstone Project I',
                'credit' => 6
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Software Engineering Ethics',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 1,
                'subject_name' => 'Software Project Management',
                'credit' => 3
            ],

            // Year 4 Semester 2
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Capstone Project II',
                'credit' => 6
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Industry Internship',
                'credit' => 3
            ],
            [
                'name' => 'Software Engineering',
                'code' => 'SE',
                'description' => 'Focuses on software development methodologies, project management, and building scalable applications.',
                'duration_years' => 4,
                'total_credits' => 120,
                'degree_type' => 'Bachelor of Science',
                'year' => 4,
                'semester' => 2,
                'subject_name' => 'Emerging Technologies',
                'credit' => 3
            ],
        ];

        foreach ($programs as $program) {
            program::create($program);
        }
    }
}
