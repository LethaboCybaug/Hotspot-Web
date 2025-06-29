<?php

namespace App\Http\Controllers;

use App\Models\CustomRoute;
use Illuminate\Http\Request;

class CustomRouteController extends Controller
{
    public function index()
    {
        return response()->json(CustomRoute::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|integer|exists:users,user_id',
            'origin_location_id' => 'required|integer|exists:locations,location_id',
            'destination_location_id' => 'required|integer|exists:locations,location_id',
            'estimated_time' => 'required',
        ]);

        $route = CustomRoute::create($validated);
        return response()->json($route, 201);
    }

    public function show($id)
    {
        return response()->json(CustomRoute::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $route = CustomRoute::findOrFail($id);
        $route->update($request->all());
        return response()->json($route);
    }

    public function destroy($id)
    {
        $route = CustomRoute::findOrFail($id);
        $route->delete();
        return response()->json(['message' => 'Route deleted successfully']);
    }
}
