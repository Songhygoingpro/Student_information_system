<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'student_id',
        'semester',
        'english',
        'graphic_design',
        'network',
        'java',
        'php',
        'total',
        'status',
    ];

    // Relationships
    public function course()
    {
        // Maps to classes table via Course model
        return $this->belongsTo(Course::class, 'class_id');
    }

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }
}
