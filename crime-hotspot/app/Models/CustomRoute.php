<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomRoute extends Model
{
    use HasFactory;

    protected $table = 'routes';

    protected $primaryKey = 'route_id';

    protected $fillable = [
        'user_id',
        'origin_location_id',
        'destination_location_id',
        'estimated_time',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function originLocation()
    {
        return $this->belongsTo(Location::class, 'origin_location_id', 'location_id');
    }

    public function destinationLocation()
    {
        return $this->belongsTo(Location::class, 'destination_location_id', 'location_id');
    }
}
