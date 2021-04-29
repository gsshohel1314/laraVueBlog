<?php

namespace App\Http\Controllers\Backend;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::latest('id')->get();
        return response()->json([
            'categories' => $categories,
        ], 200);
    }

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

    public function edit($id){
        $category = Category::findOrFail($id);
        return response()->json([
            'category' => $category,
        ], 200);
    }

    public function update(Request $request ,$id){
        $this->validate($request,[
            'name'=>'required|string',
            'description'=>'nullable|string'
        ]);
        $category = Category::findOrFail($id);
        $category->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);
    }

    public function show($id){
        $category = Category::findOrFail($id);
        return response()->json([
            'category' => $category,
        ], 200);
    }

    public function delete($id){
        $category = Category::findOrFail($id);
        $category->delete();
    }
}
