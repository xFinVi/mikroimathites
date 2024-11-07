<?php

use App\Http\Controllers\ContactController;
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



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/* ROUTES  */
Route::get('/video', function () {
    return Inertia::render('Videos');
})->name('video');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');
Route::get('/competition', function () {
    return Inertia::render('Competition');
})->name('competition');

Route::post('/competition', [FeedbackController::class, 'store']);
Route::post('/contact', [ContactController::class, 'store']);

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');


/* handling Forms posts */



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/api/subscribe', [NewsletterController::class, 'subscribe']);



require __DIR__ . '/auth.php';
