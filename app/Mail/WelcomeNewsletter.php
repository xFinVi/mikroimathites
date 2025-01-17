<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use SendGrid\Mail\Mail as SendGridMail;
use SendGrid\Mail\From;
use SendGrid\Mail\To;
use SendGrid\Mail\Content;


class WelcomeNewsletter extends Mailable
{
    use Queueable, SerializesModels;

    public $email;

    public function __construct($email)
    {
        $this->email = $email;
    }



    // Define the content of the email
    public function build()
    {

        return $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->subject('Καλωσορίσατε στο Newsletter μας!')
            ->view('emails.welcome_newsletter')
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
