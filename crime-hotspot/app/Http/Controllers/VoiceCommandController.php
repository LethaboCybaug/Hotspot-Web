<?php

namespace App\Http\Controllers;

use App\Models\VoiceCommand;
use Illuminate\Http\Request;

class VoiceCommandController extends Controller
{
    // List all voice commands
    public function index()
    {
        return response()->json(VoiceCommand::all());
    }

    // Store a new voice command
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'command_text' => 'required|string',
            'intent' => 'required|string',
        ]);

        $voiceCommand = VoiceCommand::create($validated);

        return response()->json($voiceCommand, 201);
    }

    // Show a specific voice command
    public function show($id)
    {
        return response()->json(VoiceCommand::findOrFail($id));
    }

    // Update a voice command
    public function update(Request $request, $id)
    {
        $voiceCommand = VoiceCommand::findOrFail($id);
        $voiceCommand->update($request->all());

        return response()->json($voiceCommand);
    }

    // Delete a voice command
    public function destroy($id)
    {
        $voiceCommand = VoiceCommand::findOrFail($id);
        $voiceCommand->delete();

        return response()->json(['message' => 'Voice command deleted successfully']);
    }
}
