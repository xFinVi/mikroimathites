// resources/js/Pages/Welcome.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Hero from "@/Pages/Hero";
import Videos from "@/Components/Videos";
import News from "@/Pages/News";

import PageLayout from "@/Layouts/PageLayout";
import EarlyEducation from "@/Components/EarlyEducation";
import OurOffer from "@/Components/OurOffer";
import Newsletter from "@/Components/Newsletter";
import Review from "@/Components/Review";
import Spinner from "@/Components/Spinner";
import { useEffect, useState } from "react";

export default function Welcome({ auth }: PageProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate content loading or fetch your data here
        setTimeout(() => setLoading(false), 3000); // Example delay
    }, []);

    if (loading) {
        return <Spinner />; // Show the loader while loading is true
    }
    return (
        <PageLayout auth={auth}>
            <Head title="Αρχική" />
            <Hero />

            <Videos />

            <EarlyEducation />

            <OurOffer />
            {/*  <News /> */}
            <Newsletter />
            {/* <Review /> */}
        </PageLayout>
    );
}
