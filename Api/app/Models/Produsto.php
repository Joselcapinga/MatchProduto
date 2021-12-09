<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produsto extends Model
{
    use HasFactory;

    /*protected $fillable = [
        'name',
        'email',
        'password',
    ];*/

    public function roles()
    {
        return $this->belongsToMany(App\Models\User::class);
    }
}
