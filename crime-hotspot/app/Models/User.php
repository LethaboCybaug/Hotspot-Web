<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $primaryKey = 'user_id';  // Matches your custom primary key

    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'role',
        'otp',
    ];

    // Optional: Hide sensitive fields like OTP in responses
    protected $hidden = [
        'otp',
    ];
}
