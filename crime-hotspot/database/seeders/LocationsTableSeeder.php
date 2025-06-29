<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\Location::create([
            'name' => 'Main Street',
            'latitude' => -25.746111,
            'longitude' => 28.188056,
        ]);
    }
    
}
