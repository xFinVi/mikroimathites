// src/Pages/Index.tsx

import PageLayout from "@/Layouts/PageLayout";
import { PageProps, PaginatedData, Craft } from "@/types";
import { Link } from "@inertiajs/react"; // Ensure Link is imported from Inertia
import React, { useState } from "react";

const Index: React.FC<PageProps<{ crafts: PaginatedData<Craft> }>> = ({
  crafts,
  auth,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageLayout auth={auth} pageTitle="Δημιουργίες" bgColorClass="bg-[#f3f6]">
      <div className="flex flex-col items-center justify-center gap-4 py-6 bg-[#FFFEF5]">
        <div className="flex flex-col items-center justify-center w-[100%] shadow-lg mynerve">
          <h1>Ψάξε την εργασία που θέλεις</h1>
          <div className="flex items-center gap-3 p-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
            <div>
              <Link
                className="relative w-full bg-[#3d59f5] flex items-center p-2 text-white font-bold mynerve rounded-full gap-2"
                href="/admin/paidikes-ergasies"
              >
                Προσθήκη
              </Link>
            </div>
          </div>
        </div>

        {/* Card Grid Container */}
        <div className="grid grid-cols-2 gap-4 mx-auto xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-w-[80%]">
          {crafts.data
            .filter((card: Craft) =>
              card.title
                .toLocaleLowerCase("el")
                .includes(searchQuery.toLocaleLowerCase("el"))
            )
            .map((card: Craft) => (
              <article
                key={card.id}
                className="overflow-hidden bg-transparent rounded-lg"
              >
                <Link href={`/paidikes-ergasies/${card.id}`} className="block">
                  <img
                    src={card.img_url}
                    alt={card.title}
                    className="relative w-[350px] h-[180px] xs:h-[150px] sm:h-[200px] bg-center bg-contain shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 object-contain"
                  />
                </Link>
                <h4 className="p-2 xs:text-sm sm:text-lg  text-[#1DB6D6] text-center mynerve">
                  {card.title}
                </h4>
              </article>
            ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
