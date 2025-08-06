<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create or update an admin user for testing
        $email = 'admin@example.com';

        $user = User::query()->where('email', $email)->first();

        if (!$user) {
            $user = new User();
            $user->name = 'Administrator';
            $user->email = $email;
        }

        $user->password = Hash::make('password'); // default password: password
        $user->role = 'admin';
        $user->save();
    }
}
