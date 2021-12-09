<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function all()
    {
        //return response()->json(['usuarios' => User::all(), 200]);
        $users = User::all();
        return response()->json($users);
    }

    public function add(Request $request)
    {
        $user = new User;
        
        $user->name = $request->name;
        $user->descricao = $request->email;
        //$user->password = Hash::make($request->senha);
        //$user->password = $request->senha;
        $user->save();

        return $request;
        //return response()->json(['user' => $request, 200]);
        
    }

    public function user(Request $request)
    {
      $user = User::where('email', $request['email'])->get();
      return response()->json(['user' => $user, 200]);
    }

    public function auth(Request $request)
    {  
        $user = DB::table('users')->where('email', '=', $request['email'])->where('password', '=', $request['senha'])->get();
        //if($user->count() > 0) 
       // return 1;
        if($user->count() > 0){
            return $user->id;
        }
        return -1;
    }
}
