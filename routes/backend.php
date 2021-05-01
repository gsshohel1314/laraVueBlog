<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\PostController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;

Route::group(['prefix' => 'backend', 'as' => 'backend.', 'middleware' => ['auth']], function(){
    // Dashboard
    Route::get('/', DashboardController::class)->name('dashboard');

    // Category
    Route::get('category', [CategoryController::class, 'index']);
    Route::post('category/create',[CategoryController::class,'create']);
    Route::get('category/edit/{id}', [CategoryController::class, 'edit']);
    Route::post('category/update/{id}', [CategoryController::class, 'update']);
    Route::get('category/show/{id}', [CategoryController::class, 'show']);
    Route::get('category/{id}', [CategoryController::class, 'delete']);

    // Post
    Route::resource('post', PostController::class);
});

