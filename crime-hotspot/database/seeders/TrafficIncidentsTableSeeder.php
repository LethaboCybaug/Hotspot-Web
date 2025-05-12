<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TrafficIncidentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\TrafficIncident::create([
            'reported_by' => 1,
            'location_id' => 1,
            'incident_type' => 'Accident',
            'severity' => 'High',
            'status' => 'Active',
            'description' => 'Car accident on Main Street',
            'reported_at' => now(),
        ]);
    }
    
}
