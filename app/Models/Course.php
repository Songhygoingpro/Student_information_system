<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    // Map to 'classes' table
    protected $table = 'classes';

    protected $fillable = [
        'room',
        'section',
        'year',
        'description',
    ];

    // Relationships
    public function results()
    {
        return $this->hasMany(Result::class, 'class_id');
    }
}
