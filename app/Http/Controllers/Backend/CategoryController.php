<?php

namespace App\Http\Controllers\Backend;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function create(Request $request){
        // return $request;

        $this->validate($request,[
            'name'=>'required|string',
            'description'=>'nullable|string'
        ]);

        Category::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
    }
}
