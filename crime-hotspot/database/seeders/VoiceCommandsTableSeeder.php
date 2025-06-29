<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VoiceCommandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\VoiceCommand::create([
            'user_id' => 1,
            'command_text' => 'Report an accident on Main Street',
            'intent' => 'report_incident',
        ]);
    }
    
}
