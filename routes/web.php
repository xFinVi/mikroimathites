<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ProfileController;
use App\Mail\WelcomeNewsletter;
use App\Models\Feedback;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CorsMiddleware;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
*/

// Home route: Renders the welcome page with dynamic variables
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'), // Checks if login route exists
        'canRegister' => Route::has('register'), // Checks if register route exists
        'laravelVersion' => Application::VERSION, // Laravel version
        'phpVersion' => PHP_VERSION, // PHP version
    ]);
});

// Dashboard route: Protected by 'auth' and 'verified' middlewares
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

/* 
|--------------------------------------------------------------------------
| General Routes
|--------------------------------------------------------------------------
*/

// Video page route
Route::get('/video', function () {
    return Inertia::render('Videos');
})->name('video');

// About page route
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Blog page route
Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

// Competition page route (GET)
Route::get('/competition', function () {
    return Inertia::render('Competition');
})->name('competition');

// Handle competition form submission (POST)
Route::post('/competition', [FeedbackController::class, 'store']);

// Contact form submission (POST)
Route::post('/contact', [ContactController::class, 'store']);

// Contact page route
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Testing route for a generic controller action
Route::get('/testing', [Controller::class, "store"]);

/* 
|--------------------------------------------------------------------------
| Profile Management Routes
|--------------------------------------------------------------------------
| Protected routes for authenticated users to manage their profile.
*/

// Profile management group (requires 'auth' middleware)
Route::middleware('auth')->group(function () {
    // Edit profile page
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    // Update profile information
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // Delete profile
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/* 
|--------------------------------------------------------------------------
| Newsletter Subscription
|--------------------------------------------------------------------------
| API endpoint to handle newsletter subscriptions.
*/

// Handle newsletter subscription form submissions
Route::post('/api/subscribe', [NewsletterController::class, 'subscribe']);

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
| Includes routes for user authentication (e.g., login, registration, etc.)
*/

// Load additional authentication routes from the 'auth.php' file
require __DIR__ . '/auth.php';
