<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class program extends Model
{
    protected $fillable = [
        'name',
        'code',
        'description',
        'duration_years',
        'total_credits',
        'degree_type',
        'year',
        'semester',
        'subject_name',
        'credit'
    ];
}
