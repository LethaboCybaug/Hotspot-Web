<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    // List all locations
    public function index()
    {
        return response()->json(Location::all());
    }

    // Store a new location
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $location = Location::create($validated);

        return response()->json($location, 201);
    }

    // Show a specific location
    public function show($id)
    {
        return response()->json(Location::findOrFail($id));
    }

    // Update a location
    public function update(Request $request, $id)
    {
        $location = Location::findOrFail($id);
        $location->update($request->all());
        return response()->json($location);
    }

    // Delete a location
    public function destroy($id)
    {
        $location = Location::findOrFail($id);
        $location->delete();
        return response()->json(['message' => 'Location deleted successfully']);
    }
}
