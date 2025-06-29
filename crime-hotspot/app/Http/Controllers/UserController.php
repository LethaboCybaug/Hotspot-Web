<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // ✅ List all users
    public function index()
    {
        return response()->json(User::all());
    }

    // ✅ Store a new user
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'required|string',
            'role' => 'required|string',
            'otp' => 'required|integer',
        ]);

        $user = User::create($validated);

        return response()->json($user, 201);
    }

    // ✅ Show a specific user
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    // ✅ Update a user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }
}
