<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    {{-- Cookiebot script for cookie consent management --}}
    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="7e805605-0265-4381-8cfa-18ccbfb09fff"
        data-blockingmode="auto" type="text/javascript"></script>

    <!-- Meta tags for page settings and SEO -->
    <meta charset="utf-8">
    <meta name="language" content="el">
    <meta name="geo.region" content="GR">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="εκπαίδευση, παιδικά βίντεο, μικροί μαθητές, δασκάλα Βικτωρία, δημιουργικότητα">
    <meta name="description"
        content="Καλώς ήρθατε στην παρέα των Μικρών Μαθητών! Μαθαίνουμε με την κυρία Βικτωρία, μια αληθινή δασκάλα, δημιουργεί βίντεο, παραμύθια και τραγούδια για να μετατρέψει την εκπαίδευση σε παιχνίδι. Εξερευνήστε ένα φιλικό και δημιουργικό περιβάλλον που εμπνέει την περιέργεια και τη μάθηση των παιδιών.">

    <!-- Favicon and Apple Touch Icons -->
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="canonical" href="{{ $canonical_url ?? url()->current() }}">


    <!-- Open Graph meta tags for social sharing -->
    <meta property="og:title" content="{{ config('app.name') }} - Εκπαιδευτικό περιβάλλον για παιδιά">
    <meta property="og:description"
        content="Ανακαλύψτε ένα εκπαιδευτικό περιβάλλον που εμπνέει και αναπτύσσει τη δημιουργικότητα των παιδιών.">
    <meta property="og:image" content="https://www.mikroimathites.gr/path/to/og-image.jpg">
    <meta property="og:url" content="https://www.mikroimathites.gr">
    <meta property="og:type" content="website">

    <!-- Page title -->
    <title inertia>{{ config('app.name') }} | Εκπαιδευτικό Περιβάλλον για Παιδιά</title>

    <!-- Fonts and FontAwesome -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Dela+Gothic+One&family=Gloria+Hallelujah&family=Mynerve&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    {{-- Cookiebot consent management script --}}
    <script data-cookieconsent="ignore">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("consent", "default", {
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
        });
        gtag("set", "ads_data_redaction", true);
        gtag("set", "url_passthrough", false);
    </script>

    <!-- Google Analytics tracking script -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7SPDH74PTE"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-7SPDH74PTE');
    </script>

    <!-- Google Tag Manager script -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-M5378HLC');
    </script>

    <!-- Inertia and Vite setup -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <!-- Google Tag Manager (noscript fallback) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5378HLC" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- Inertia application -->
    @inertia
</body>

</html>
