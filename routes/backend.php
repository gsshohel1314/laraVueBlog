<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;

Route::group(['prefix' => 'backend', 'as' => 'backend.', 'middleware' => ['auth']], function(){
    // Dashboard
    Route::get('/', DashboardController::class)->name('dashboard');

    // Category
    Route::get('category', [CategoryController::class, 'index']);
    Route::post('category/create',[CategoryController::class,'create']);
});

