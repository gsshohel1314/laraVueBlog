<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\DashboardController;

Route::group(['prefix' => 'backend', 'as' => 'backend.', 'middleware' => ['auth']], function(){
    // Dashboard
    Route::get('dashboard', DashboardController::class)->name('dashboard');
});
