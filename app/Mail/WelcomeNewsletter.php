<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeNewsletter extends Mailable
{
    use Queueable, SerializesModels;

    public $email;

    public function __construct($email)
    {
        $this->email = $email;
    }

    // Set the email subject
    public function envelope()
    {
        return (new Envelope())
            ->subject('Welcome to our Newsletter!');
    }

    // Define the content of the email
    public function build()
    {
        return $this->view('emails.welcome')
            ->with([
                'email' => $this->email,
            ]);
    }

    // Attachments (if any)
    public function attachments(): array
    {
        return [];
    }
}
