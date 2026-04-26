<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HealthController;
use App\Http\Controllers\Api\TaskController;

Route::get('/health', [HealthController::class, 'index']); 

Route::prefix('78942/v1')->group(function () {
    Route::apiResource('tasks', TaskController::class);
});