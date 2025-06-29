<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrafficIncidentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VoiceCommandController;
use App\Http\Controllers\AlertController;
use App\Http\Controllers\CustomRouteController;
use App\Http\Controllers\LocationController;

// Example authenticated user route (keep this if you plan to use Sanctum)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// List of API resources
Route::apiResource('traffic-incidents', TrafficIncidentController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('voice-commands', VoiceCommandController::class);
Route::apiResource('alerts', AlertController::class);
Route::apiResource('routes', CustomRouteController::class);
Route::apiResource('locations', LocationController::class);
