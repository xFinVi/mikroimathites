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
import CraftsGallery from "@/Components/CraftsGallery";
import Spinner from "@/Components/Spinner";
import { useEffect, useState } from "react";
import Test from "@/Components/Test";

const craftsData = [
    {
        image: "/Images/xeirotexnies/alexandros.jpeg",
        title: "Αλέξανδρος",
        location: "Αγγλία",
    },
    {
        image: "/Images/xeirotexnies/vasilis.png",
        title: "Βασίλης",
        location: "Ελλάδα",
    },
    {
        image: "/Images/xeirotexnies/παιδι.jpeg",
        title: "Όριαν",
        location: "Ολλανδία",
    },
];

export default function Welcome({ auth }: PageProps) {
    return (
        <PageLayout auth={auth} pageTitle="">
            <Head title="Αρχική" />
            <Hero />
            <CraftsGallery crafts={craftsData} />
            <Videos />
            <EarlyEducation />
            <OurOffer />
            {/*  <News /> */}
            <Newsletter />
            {/* <Review /> */}
        </PageLayout>
    );
}
