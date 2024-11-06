<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use App\Mail\WelcomeNewsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        // Validate with a custom error message for existing email
        $request->validate([
            'email' => 'required|email|unique:newsletter_subscribers,email'
        ], [
            'email.unique' => 'This email is already subscribed to the newsletter.'
        ]);

        // Save the email to the database
        $subscriber = NewsletterSubscriber::create([
            'email' => $request->email
        ]);

        // Send the welcome email
        try {
            Mail::to($subscriber->email)->send(new WelcomeNewsletter($subscriber->email));
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send the welcome email. Please try again later.'], 500);
        }

        return response()->json(['message' => 'Thank you for subscribing!'], 200);
    }
}
