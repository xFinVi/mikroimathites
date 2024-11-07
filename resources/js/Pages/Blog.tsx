// resources/js/Pages/About.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import { useState } from "react";

const Blog = ({ auth }: PageProps) => {
    return (
        <PageLayout auth={auth}>
            <Head title="Blog" />
            <div
                className="h-[80vh] py-20 flex justify-center items-start"
                style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "local",

                    backgroundImage: `url('Images/underconstruction.png')`,
                }}
            >
                <h1 className="mt-20 p-6 rounded-xl text-2xl xs:text-3xl text-center  md:text-5xl font-bold text-white font-chewy bg-[#F9B000]">
                    Περιμένουμε άδεια απο την Πολεοδομία
                    <p className="mt-6 text-2xl text-center">
                        σύντομα κοντά σας
                    </p>
                </h1>
            </div>
        </PageLayout>
    );
};

export default Blog;
