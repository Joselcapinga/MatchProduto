<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Produto;

class ProdutoController extends Controller
{

    public function add(Request $request, $id)
    {
        $produt = new User;
        $produt->produto = $request->produto;
        $produt->user_id = $request->descriuser_idcao;
        //$user->password = Hash::make($request->senha);
        $produt->user_id = $id;

        $produt->save();

        return $request;
        //return response()->json(['user' => $request, 200]);
        
    }
    
}
