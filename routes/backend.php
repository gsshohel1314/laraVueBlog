<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;

Route::group(['prefix' => 'backend', 'as' => 'backend.', 'middleware' => ['auth']], function(){
    // Dashboard
    Route::get('dashboard', DashboardController::class)->name('dashboard');


    Route::get('/{anypath}', DashboardController::class)->where('path', '.*');

    // Category
    Route::post('category/create',[CategoryController::class,'create']);
});

