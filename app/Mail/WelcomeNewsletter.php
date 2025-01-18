<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Log;

class WelcomeNewsletter extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $email;

    public function __construct($email)
    {
        $this->email = $email;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME')),
            subject: 'Καλώς ήρθατε στο Newsletter μας!'
        );
    }

    public function content(): Content
    {
        Log::info('Content for email to ' . $this->email . ' prepared');
        return new Content(
            view: 'emails.welcome_newsletter'
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
