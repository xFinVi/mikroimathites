// resources/js/Pages/Welcome.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Hero from "@/Pages/Hero";
import Videos from "@/Components/Videos";
import News from "@/Pages/News";
import ReactCookieBot from "react-cookiebot";

import PageLayout from "@/Layouts/PageLayout";
import EarlyEducation from "@/Components/EarlyEducation";
import OurOffer from "@/Components/OurOffer";
import Newsletter from "@/Components/Newsletter";
import Review from "@/Components/Review";
import Spinner from "@/Components/Spinner";
import { useEffect, useState } from "react";

export default function Welcome({ auth }: PageProps) {
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
