<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
//use App\Http\Controllers\ProdutoController;

Route::get('users', [UserController::class, 'all']);
Route::post('add', [UserController::class, 'add']);
Route::post('user', [UserController::class, 'user']);
Route::post('auth', [UserController::class, 'auth']);

//Route::post('addProduto', [ProdutoController::class, 'add']);