<?php

namespace App\Http\Controllers\Backend;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CatController extends Controller
{
    public function add_category(Request $request){
        return $request;

        $this->validate($request,[
            'name'=>'required|min:2|max:50',
            'description'=>'nullable|string'
        ]);

        $category = New Category();
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();
        return ['message'=>'OK'];
    }

}
