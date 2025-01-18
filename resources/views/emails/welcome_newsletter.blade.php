<!DOCTYPE html>
<html lang="el">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Καλώς ήρθατε στο Newsletter μας</title>
</head>

<body style="background-color: #fff3b2; font-family: sans-serif; color: #4A5568; ">

    <div
        style="max-width: 600px; margin: 0 auto; padding:20px 0px 20px 0px; background-color: #f5f5f5; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
        <!-- Header Section -->

        <div style="padding: 20px 40px 20px 40px;">
            <div>
                <h1 style="font-size: 24px; font-weight: bold; color: #1D4ED8;">Καλώς ήρθατε στο Newsletter μας!</h1>
                <p style="font-size: 18px; color: #4A5568;">Σας ευχαριστούμε που εγγραφήκατε και που στηρίζετε την
                    κοινότητά
                    μας!</p>
            </div>
            <div style=" margin-bottom: 20px;">
                <img src="https://mikroimathites.gr/Images/newsletterBG.png" alt="Bruno and Victoria "
                    style="max-width: 100%; margin-bottom: 20px;">
            </div>
            <!-- Body Section -->
            <div style="margin-bottom: 20px; ">
                <p style="font-size: 18px;">Γειά σας, <strong>{{ $email }}</strong>,</p>
                <p style="font-size: 14px; line-height: 1.6;">Ευχαριστούμε που εγγραφήκατε στο newsletter μας! Είμαστε
                    ενθουσιασμένοι που σας έχουμε μαζί μας και ανυπομονούμε να σας κρατήσουμε ενήμερους για όλα τα νέα
                    και
                    τα υπέροχα πράγματα που συμβαίνουν στην κοινότητά μας.</p>
                <p></p>

                <div style="background-color: #D1E7FD; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="font-size: 18px; font-weight: 600; color: #1D4ED8;">Τι να περιμένετε;</h2>
                    <ul style="padding-left: 20px; font-size: 14px; color: #4A5568; list-style-type: disc; margin: 0;">
                        <li style="margin-bottom: 10px;">Διασκεδαστικές εργασίες και χειροτεχνίες για τα παιδιά σας</li>
                        <li style="margin-bottom: 10px;">Εκπαιδευτικό υλικό και ασκήσεις εμπνευσμένες από την τάξη της
                            κυρίας Βικτωρίας</li>
                        <li style="margin-bottom: 10px;">Χρήσιμες συμβουλές για δημιουργικό παιχνίδι και μάθηση στο
                            σπίτι</li>
                        <li>Ενημερώσεις για τις τελευταίες δραστηριότητές μας στο YouTube</li>
                    </ul>

                </div>
                <div style="background-color: #FFAAAA; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="font-size: 18px; font-weight: 600; color: #DF5151;">Τι να μην περιμένετε;</h2>
                    <p style="font-size: 14px; color: #333; line-height: 1.6; margin: 0;">
                        Δεν πρόκειται να σας βομβαρδίζουμε με emails! Στόχος μας είναι να στέλνουμε 1-2 emails το μήνα,
                        μόνο με το πιο
                        χρήσιμο και ενδιαφέρον περιεχόμενο για εσάς και την οικογένειά σας.
                    </p>
                </div>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center;">
                <a href="{{ config('app.url') }}"
                    style="display: inline-block; background-color: #1D4ED8; color: white; padding: 12px 24px; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px;">Εξερευνήστε
                    τα νέα μας</a>
            </div>

            <div style="text-align: center; margin-right: 40px; margin-left: 40px;">
                <img src="https://mikroimathites.gr/Images/logoMikroimathites.png" alt="Μικροί Μαθητές Logo"
                    style="max-width: 220px;">
            </div>
            <!-- Footer Section -->
            <div style="font-size: 12px; text-align: center; color: #4A5568; margin-bottom:20px;">
                <p>Αν δεν επιθυμείτε να λαμβάνετε άλλο περιεχόμενο, μπορείτε να <a
                        href="{{ url('/unsubscribe/' . urlencode($email)) }}"
                        style="color: #EF4444; text-decoration: underline;" target="_blank">απεγγραφείτε</a>.</p>
                <p>&copy; 2025 Μικροί Μαθητές. Όλα τα δικαιώματα διατηρούνται.</p>
            </div>

        </div>
    </div>

</body>

</html>
