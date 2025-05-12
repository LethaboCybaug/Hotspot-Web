<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlertsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    \App\Models\Alert::create([
        'user_id' => 1,
        'message' => 'High traffic on Main Street. Use alternative routes.',
    ]);
}

}
