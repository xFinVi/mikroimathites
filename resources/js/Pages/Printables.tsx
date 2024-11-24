// src/Pages/Printables.tsx

import PageLayout from "@/Layouts/PageLayout";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react"; // Ensure Link is imported from Inertia
import React, { useState } from "react";

interface Card {
    id: number;
    title: string;
    imgUrl: string;
}

interface PrintablesProps extends PageProps {
    cards: Card[]; // Cards data passed from Laravel to React
}

const Printables: React.FC<PrintablesProps> = ({ cards, auth }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Search for:", searchQuery);
    };

    return (
        <PageLayout
            auth={auth}
            pageTitle="Δημιουργίες"
            bgColorClass="bg-[#f3f6]"
        >
            <div className="flex flex-col items-center justify-center gap-4 py-6 bg-[#FFFEF5]">
                <div className="flex flex-col items-center justify-center w-[100%] shadow-lg mynerve">
                    <h1>Ψάξε την εργασία που θέλεις</h1>
                    <div className="flex items-center p-6">
                        <form
                            onSubmit={handleSearchSubmit}
                            className="flex items-center w-full"
                        >
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full p-2 pl-8 border rounded-full"
                                    placeholder="Αναζήτηση..."
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 p-2 text-gray-400 transform -translate-y-1/2 top-1/2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 18a8 8 0 110-16 8 8 0 010 16zm11 0l-6-6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Card Grid Container */}
                <div className="grid grid-cols-2 gap-4 mx-auto xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-w-[80%]">
                    {cards
                        .filter((card) =>
                            card.title
                                .toLocaleLowerCase("el")
                                .includes(searchQuery.toLocaleLowerCase("el"))
                        )

                        .map((card) => (
                            <article
                                key={card.id}
                                className="overflow-hidden bg-transparent rounded-lg"
                            >
                                <Link
                                    href={`/printables/${card.id}`}
                                    className="block"
                                >
                                    <img
                                        src={card.imgUrl}
                                        alt={card.title}
                                        className="relative w-[350px] h-[180px] xs:h-[150px] sm:h-[200px] bg-center bg-cover shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                                    />
                                </Link>
                                <h4 className="p-4 text-lg text-[#1DB6D6] text-center">
                                    {card.title}
                                </h4>
                            </article>
                        ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default Printables;
