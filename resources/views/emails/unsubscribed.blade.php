<!DOCTYPE html>
<html lang="el">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Αποεγγραφή επιτυχής</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="font-sans bg-gray-100">
    <div class="max-w-3xl p-8 mx-auto my-16 text-center bg-white rounded-lg shadow-xl">
        <img src="{{ asset('Images/logoMikroimathites.png') }}" alt="Μικροί Μαθητές" class="mx-auto mb-8 ">


        <h1 class="mb-4 text-3xl font-bold text-green-600">Επιτυχής Απεγγραφεί!</h1>

        <p class="mb-4 text-xl text-gray-700">Η διεύθυνση email <strong>{{ $email }}</strong> έχει απεγγραφεί με
            επιτυχία από το newsletter μας.</p>

        @if (isset($error))
            <p class="mb-4 text-lg text-red-500">{{ $error }}</p>
        @else
            <p class="mb-4 text-lg text-gray-600">Λυπούμαστε που φεύγετε! Αν το μετανιώσετε, μπορείτε να εγγραφείτε ξανά
                ανά πάσα στιγμή.</p>
        @endif

        <a href="{{ url('/') }}"
            class="inline-block px-5 py-2 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700">Επιστροφή στην
            Αρχική</a>
    </div>
</body>

</html>
