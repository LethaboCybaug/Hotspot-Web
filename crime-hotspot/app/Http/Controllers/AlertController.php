<?php

namespace App\Http\Controllers;

use App\Models\Alert;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    // List all alerts
    public function index()
    {
        return response()->json(Alert::all());
    }

    // Store a new alert
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'message' => 'required|string',
            'image_url' => 'nullable|string',
        ]);

        $alert = Alert::create($validated);

        return response()->json($alert, 201);
    }

    // Show a specific alert
    public function show($id)
    {
        return response()->json(Alert::findOrFail($id));
    }

    // Update an alert
    public function update(Request $request, $id)
    {
        $alert = Alert::findOrFail($id);
        $alert->update($request->all());

        return response()->json($alert);
    }

    // Delete an alert
    public function destroy($id)
    {
        $alert = Alert::findOrFail($id);
        $alert->delete();

        return response()->json(['message' => 'Alert deleted successfully']);
    }
}
