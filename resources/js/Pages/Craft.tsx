// src/Pages/Craft.tsx

import React, { useEffect } from "react";
import { PageProps } from "@/types";
import PageLayout from "@/Layouts/PageLayout";

interface Card {
    id: number;
    description: string;
    title: string;
    imgUrl: string;
    pdfUrl: string;
}

interface CraftProps extends PageProps {
    card: Card; // Single card data passed from Laravel to React
}

const kidsColorPalette = [
    "#FFD93D",
    "#6ECFF6",
    "#43B756",
    "#FF6B9C",
    "#FF8C42",
];
const randomNumber = Math.floor(Math.random() * kidsColorPalette.length);
let dynamicBgClass = `bg-[${kidsColorPalette[randomNumber]}]`;

const Craft: React.FC<CraftProps> = ({ card, auth }) => {
    console.log(card);
    return (
        <PageLayout
            auth={auth}
            pageTitle={card.title}
            bgColorClass={dynamicBgClass}
        >
            <div className="w-full max-w-[95%] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[90%] lg:max-w-[70%] h-auto mx-auto flex flex-col md:flex-row justify-center  p-4 sm:p-6 lg:p-10 gap-4 items-center">
                <div className="flex items-center mx-auto justify-center xs:w-[100%] sm:w-[300px] bg-white">
                    <a
                        href={card.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={card.imgUrl}
                            alt={card.title}
                            className="w-full h-auto shadow-xl rounded-lg max-h-[100%]"
                        />
                    </a>
                </div>

                <div className="flex flex-col items-center justify-between flex-1 gap-3  max-w-[600px] bg-[#f3f3f3] p-6 rounded-lg h-full">
                    <div>
                        <h1 className="mb-4 text-2xl text-center border-b-2 xs:text-3xl sm:text-4xl mynerve">
                            {card.title}
                        </h1>
                        <div className="flex flex-col justify-center gap-4">
                            <p className="text-sm font-light">
                                {card.description}
                            </p>
                            <h3 className="text-lg mynerve">
                                <strong>Δυσκολία:</strong> Επίπεδο 1
                            </h3>
                            <h3 className="text-lg mynerve">
                                <strong>Είδος:</strong> Εργασίες για το σπίτι
                            </h3>
                        </div>
                    </div>

                    <a
                        href={card.pdfUrl}
                        className="bg-[#43B756] p-3 rounded-full text-center text-white w-[120px] "
                        download
                    >
                        Download
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center w-full my-4">
                <a
                    href="/printables"
                    className="bg-[#376be2] flex items-center p-3 text-white font-bold mynerve rounded-full gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.25 19.25L3.75 12.75M3.75 12.75L10.25 6.25M3.75 12.75H20.25"
                        />
                    </svg>
                    Πίσω στις Δημιουργίες
                </a>
            </div>
        </PageLayout>
    );
};

export default Craft;
