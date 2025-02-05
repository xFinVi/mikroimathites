<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use App\Mail\WelcomeNewsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use MailerLiteApi\MailerLite;


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


            $mailerlite = new MailerLite(env('MAILERLITE_API'));
            $groupsApi = $mailerlite->groups();
            $subscriberData = [
                'email' => $subscriber->email,
                'fields' => [
                    'name' => $subscriber->name ?? null
                ],
            ];
            Log::info('Subscribed to MailerLite: ' . $subscriber->email);
            $result = $groupsApi->addSubscriber(env('MAILERLITE_GROUP_ID'), $subscriberData);
            Log::info('MailerLite subscription result: ' . json_encode($result, JSON_PRETTY_PRINT));
        } catch (\Exception $e) {
            Log::error('Failed to subscribe to MailerLite: ' . $e->getMessage());
            // Optionally, you might want to rollback the database entry if subscription fails
            $subscriber->delete();
            return response()->json(['message' => 'Failed to subscribe. Please try again later.'], 500);
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

            try {
                $mailerlite = new MailerLite(env('MAILERLITE_API'));
                $groupsApi = $mailerlite->groups();
                $groupsApi->removeSubscriber(env('MAILERLITE_GROUP_ID'), $email);
                Log::info('Unsubscribed from MailerLite: ' . $email, $groupsApi);
            } catch (\Exception $e) {
                Log::error('Failed to unsubscribe from MailerLite: ' . $e->getMessage());
                // Optionally handle this error

            }
            // Return a confirmation message
            return view('emails.unsubscribed', ['email' => $email]);
        }

        return view('emails.unsubscribed', ['email' => $email, 'error' => 'This email is not subscribed to the newsletter.']);
    }
}
