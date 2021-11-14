<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function all()
    {
        return response()->json(['usuarios' => User::all(), 200]);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'email' => 'required|email',
            'senha' => 'required',
            'senha_conforme' => 'required'
        ]);
        
        if($validator->fails()){
            return response()->json(['error' => $validator->erros()], 200);
        }

        $user = new User();
        
        $user->name = $request->nome;
        $user->email = $request->email;
        $user->password = $request->senha;

        $user->save();
        
    }
}
