<?php

namespace App\Http\Controllers;

use App\Models\TrafficIncident;
use Illuminate\Http\Request;

class TrafficIncidentController extends Controller
{
    // ✅ List all incidents
    public function index()
    {
        return response()->json(TrafficIncident::all());
    }

    // ✅ Store a new incident
    public function store(Request $request)
    {
        $validated = $request->validate([
            'reported_by' => 'required|integer',
            'location_id' => 'required|integer',
            'incident_type' => 'required|string',
            'severity' => 'required|string',
            'status' => 'string',
            'description' => 'string|nullable',
        ]);

        $incident = TrafficIncident::create($validated);

        return response()->json($incident, 201);
    }

    // ✅ Show a specific incident by ID
    public function show($id)
    {
        $incident = TrafficIncident::findOrFail($id);
        return response()->json($incident);
    }

    // ✅ Update a specific incident
    public function update(Request $request, $id)
    {
        $incident = TrafficIncident::findOrFail($id);

        $incident->update($request->all());

        return response()->json($incident);
    }

    
}
