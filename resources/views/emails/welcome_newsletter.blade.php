<!DOCTYPE html>
<html lang="el">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Καλώς ήρθατε στο Newsletter μας</title>
</head>

<body style="background-color: #f5f5f5; font-family: sans-serif; color: #4A5568;">

    <div
        style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://mikroimathites.gr/Images/logoMikroimathites.png" alt="Μικροί Μαθητές Logo"
                style="max-width: 100%; margin-bottom: 20px;">
            <h1 style="font-size: 24px; font-weight: bold; color: #1D4ED8;">Καλώς ήρθατε στο Newsletter μας!</h1>
            <p style="font-size: 18px; color: #4A5568;">Σας ευχαριστούμε που εγγραφήκατε και που στηρίζετε την κοινότητά
                μας!</p>
        </div>

        <!-- Body Section -->
        <div style="margin-bottom: 20px;">
            <p style="font-size: 18px;">Γειά σας, <strong>{{ $email }}</strong>,</p>
            <p style="font-size: 14px; line-height: 1.6;">Ευχαριστούμε που εγγραφήκατε στο newsletter μας! Είμαστε
                ενθουσιασμένοι που σας έχουμε μαζί μας και ανυπομονούμε να σας κρατήσουμε ενήμερους για όλα τα νέα και
                τα υπέροχα πράγματα που συμβαίνουν στην κοινότητά μας.</p>

            <div style="background-color: #D1E7FD; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="font-size: 18px; font-weight: 600; color: #1D4ED8;">Τι να περιμένετε;</h2>
                <ul style="padding-left: 20px; font-size: 14px; color: #4A5568; list-style-type: disc;">
                    <li>Διασκεδαστικές εργασίες και χειροτεχνίες για τα παιδιά σας</li>
                    <li>Εκπαιδευτικό υλικό και ασκήσεις εμπνευσμένες από την τάξη της κυρίας Βικτωρίας</li>
                    <li>Χρήσιμες συμβουλές για δημιουργικό παιχνίδι και μάθηση στο σπίτι</li>
                    <li>Ενημερώσεις για τις τελευταίες δραστηριότητές μας στο YouTube</li>
                </ul>
            </div>
        </div>

        <!-- Call to Action -->
        <div style="text-align: center;">
            <a href="{{ config('app.url') }}"
                style="display: inline-block; background-color: #1D4ED8; color: white; padding: 12px 24px; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px;">Εξερευνήστε
                τα νέα μας</a>
        </div>

        <!-- Footer Section -->
        <div style="margin-top: 30px; font-size: 12px; text-align: center; color: #4A5568;">
            <p>Αν δεν επιθυμείτε να λαμβάνετε άλλο περιεχόμενο, μπορείτε να <a
                    href="{{ url('/unsubscribe/' . urlencode($email)) }}"
                    style="color: #EF4444; text-decoration: underline;" target="_blank">απεγγραφείτε</a>.</p>
            <p>&copy; 2025 Μικροί Μαθητές. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
    </div>

</body>

</html>
