<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use App\Mail\WelcomeNewsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        // In your controller
        try {
            Log::info('Sending email to: ' . $subscriber->email);
            Mail::to($subscriber->email)->queue(new WelcomeNewsletter($subscriber->email));
            Log::info('Email queued successfully');
        } catch (\Exception $e) {
            Log::error('Failed to queue email: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to send the welcome email. Please try again later.'], 500);
        }

        return response()->json(['message' => 'Thank you for subscribing!'], 200);
    }


    public function unsubscribe($email)
    {
        // Find the subscriber by their email
        $subscriber = NewsletterSubscriber::where('email', $email)->first();

        // If subscriber exists
        if ($subscriber) {
            // Optionally: you can just delete the subscriber or flag them as unsubscribedenv
            $subscriber->delete();  // Delete the record
            // Or use: $subscriber->update(['subscribed' => false]); for soft unsubscribing

            // Return a confirmation message
            return view('emails.unsubscribed', ['email' => $email]);
        }

        return view('emails.unsubscribed', ['email' => $email, 'error' => 'This email is not subscribed to the newsletter.']);
    }
}
