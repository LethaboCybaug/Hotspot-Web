<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrafficIncident extends Model
{
    use HasFactory;

    protected $table = 'traffic_incidents';  // Matches your migration table name

    protected $primaryKey = 'incident_id';   // Matches your custom primary key

    protected $fillable = [
        'reported_by',
        'location_id',
        'incident_type',
        'severity',
        'status',
        'description',
        'reported_at'
    ];
}
