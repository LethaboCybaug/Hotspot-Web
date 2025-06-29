<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoutesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    \App\Models\CustomRoute::create([
        'user_id' => 1,
        'origin_location_id' => 1,
        'destination_location_id' => 1,
        'estimated_time' => '00:15:00',
    ]);
}

}
