<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsletterSubscriber extends Model
{
    // Specify the attributes that are mass assignable
    protected $fillable = [
        'email', // Add any other fields you want to be fillable
    ];
}
