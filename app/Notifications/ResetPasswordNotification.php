<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;

class ResetPasswordNotification extends Notification
{
    public function __construct(public readonly string $token) {}

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject(Lang::get('Επαναφορά κωδικού πρόσβασης'))
            ->greeting(Lang::get('Γειά σου ,') . ' '  . $notifiable->name . ',')
            ->line(Lang::get('🔒 Λάβαμε ένα αίτημα επαναφοράς κωδικού πρόσβασης για τον λογαριασμό σου.'))
            ->action(Lang::get('Επαναφορά κωδικού'), $this->resetUrl($notifiable))
            ->line(Lang::get('🔔 Αυτός ο σύνδεσμος επαναφοράς κωδικού θα λήξει σε :count λεπτά.', ['count' => config('auth.passwords.' . config('auth.defaults.passwords') . '.expire')]))
            ->line(Lang::get('💡 Αν δεν ζήτησες επαναφορά κωδικού, αγνόησε αυτό το μήνυμα.'));
    }

    protected function resetUrl(mixed $notifiable): string
    {
        return url(route('password.reset', [
            'token' => $this->token,
            'email' => $notifiable->getEmailForPasswordReset(),
        ], false));
    }
}
