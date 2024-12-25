<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        $user = Auth::user();

        // Check if the user is authenticated and has the admin role
        if (!$user || !in_array('admin', $user->roles->pluck('name')->toArray())) {
            // Optionally, redirect or return a 403 response
            abort(403, 'Unauthorized access.');
        }

        return $next($request);
    }
}
