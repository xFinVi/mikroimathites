<?php

use App\Http\Controllers\Admin\CraftController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\AdminMiddleware;
use App\Mail\WelcomeNewsletter;
use App\Models\Feedback;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CorsMiddleware;
use App\Models\Craft;

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
    return redirect()->to('/');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'), // Checks if login route exists
        'canRegister' => Route::has('register'), // Checks if register route exists
        'laravelVersion' => Application::VERSION, // Laravel version
        'phpVersion' => PHP_VERSION, // PHP version
    ]);
})->name('Αρχική');





Route::get('/test', function () {});

// Dashboard route: Protected by 'auth' and 'verified' middlewares

/*
|--------------------------------------------------------------------------
| General Routes
|--------------------------------------------------------------------------
*/

// Video page route
Route::get('/video', function () {
    return Inertia::render('Videos', [
        'pageTitle' => 'Video',
    ]);
})->name('video');

// About page route
Route::get('/poioi-eimaste', function () {
    return Inertia::render('About', [
        'pageTitle' => 'Ποιοι Είμαστε',
    ]);
})->name('ΠοιοιΕίμαστε');

// Blog page route
Route::get('/blog', function () {
    return Inertia::render('Blog', [
        'pageTitle' => 'Blog',
    ]);
})->name('blog');
Route::get('/stirixte-mas', function () {
    return Inertia::render('Donate', [
        'pageTitle' => 'Donate',
    ]);
})->name('donate');

// Competition page route (GET)
// Route::get('/feedback/{token}', function () {
//      FeedbackController::class, 'index'
//     return Inertia::render('Feedback', [
//         'pageTitle' => 'Η Γνώμη σας',
//     ]);
// })->name('Διαγωνισμός');

Route::get('/feedback/{token}', [FeedbackController::class, 'index'])
    ->name('Feedback');

Route::get('/newsletter', function () {

    return Inertia::render('Newsletter', [
        'pageTitle' => 'Τα νέα μας',
    ]);
})->name('Newsletter');

// Handle competition form submission (POST)
Route::post('/feedback', [FeedbackController::class, 'store']);

// Contact form submission (POST)
Route::post('/contact', [ContactController::class, 'store']);

// Contact page route
// Contact page route
Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'pageTitle' => 'Επικοινωνια'
    ]);
})->name('Επικοινωνία'); // Greek name for the contact route



Route::get(
    '/privacy',
    function () {
        return Inertia::render('Privacy', [
            'pageTitle' => 'Απόρρητο',
        ]);
    }
)->name('απόρρητο');

Route::get('/paidikes-ergasies', [CraftController::class, 'index'])->name('Δημιουργίες');


Route::get('/paidikes-ergasies/{craft}', [CraftController::class, 'show'])->name('craft.show');
/*  ERGASIES */
Route::middleware([AdminMiddleware::class])->group(function () {
    Route::get('/admin/paidikes-ergasies', [CraftController::class, 'create'])->name('admin.create');

    Route::post('/admin/paidikes-ergasies', [CraftController::class, 'store'])->name('admin.store');;

    Route::get('/paidikes-ergasies/{craft}/edit', [CraftController::class, 'edit'])->name('craft.edit');
    Route::put('/paidikes-ergasies/{craft}/edit', [CraftController::class, 'update']);


    Route::delete('/paidikes-ergasies/{craft}', [CraftController::class, 'destroy'])->name('craft.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
});


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
Route::get('/unsubscribe/{email}', [NewsletterController::class, 'unsubscribe'])->name('unsubscribe');
// Route::get('/preview-email', function () {
//     $email = 'test@gmail.com';
//     $html = (new WelcomeNewsletter($email))->render(); // Renders the email view as HTML

//     return response($html)->header('Content-Type', 'text/html'); // Display HTML in browser
// });

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
| Includes routes for user authentication (e.g., login, registration, etc.)
*/

// Load additional authentication routes from the 'auth.php' file
require __DIR__ . '/auth.php';
