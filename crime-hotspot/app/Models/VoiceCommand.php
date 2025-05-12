<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoiceCommand extends Model
{
    use HasFactory;

    protected $primaryKey = 'command_id';  // Custom primary key

    protected $fillable = [
        'user_id',
        'command_text',
        'intent',
    ];

    // Optional relationship to User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
