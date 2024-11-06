<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{


    // Define the fillable fields for mass assignment
    protected $fillable = ['name', 'last_name', 'email', 'message'];
}
