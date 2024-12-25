// src/Pages/CraftItem.tsx

import React, { useEffect } from "react";
import { PageProps, Craft } from "@/types";
import PageLayout from "@/Layouts/PageLayout";
import axios from "axios";
import Dropdown from "@/Components/Dropdown";

const kidsColorPalette = [
  "#FFD93D",
  "#6ECFF6",
  "#43B756",
  "#FF6B9C",
  "#FF8C42",
];
const randomNumber = Math.floor(Math.random() * kidsColorPalette.length);
let dynamicBgClass = `bg-[${kidsColorPalette[randomNumber]}]`;

const CraftItem: React.FC<PageProps<{ craft: Craft }>> = ({ craft, auth }) => {
  console.log(auth);
  const token = document
    .querySelector('meta[name="csrf-token"]')

    ?.getAttribute("content");
  if (token) {
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this craft?")) {
      try {
        const response = await axios.delete(`/paidikes-ergasies/${craft.id}`);
        console.log("Response:", response);
        window.location.href = response.data.redirectUrl; // You may want to use a different approach here (like updating the state or using `window.location.replace()`)
      } catch (error) {
        console.error("Error deleting craft:", error);
      }
    }
  };

  return (
    <PageLayout
      auth={auth}
      pageTitle={craft.title}
      bgColorClass={dynamicBgClass}
    >
      <div className="w-full max-w-[95%] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[90%] lg:max-w-[70%] h-auto mx-auto flex flex-col md:flex-row justify-center     gap-4 items-center relative">
        <div className="flex items-center mx-auto justify-center xs:w-[100%] sm:w-[300px] bg-white">
          <a href={craft.pdf_url} target="_blank" rel="noopener noreferrer">
            <img
              src={craft.img_url}
              alt={craft.title}
              className="w-full h-auto shadow-xl rounded-lg max-h-[100%]"
            />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between flex-1 gap-3  max-w-[600px] bg-[#f3f3f3] p-6 rounded-lg h-full">
          <div>
            <div className="flex justify-between">
              <div>
                <h1 className="mb-4 text-2xl text-center border-b-2 xs:text-3xl sm:text-4xl mynerve">
                  {craft.title}
                </h1>
              </div>
              {auth.isAdmin && (
                <div>
                  <Dropdown>
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-500"
                          >
                            <circle cx="12" cy="5" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="12" cy="19" r="2" />
                          </svg>
                        </button>
                      </span>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                      <Dropdown.Link
                        href={route("craft.edit", { craft: craft.id })}
                      >
                        Edit
                      </Dropdown.Link>
                      <Dropdown.Button onClick={handleDelete}>
                        Διαγραφή
                      </Dropdown.Button>
                    </Dropdown.Content>
                  </Dropdown>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm font-light">{craft.description}</p>
              <h3 className="text-lg mynerve">
                <strong>Δυσκολία:</strong> Επίπεδο 1
              </h3>
              <h3 className="text-lg mynerve">
                <strong>Είδος:</strong> Εργασίες για το σπίτι
              </h3>
            </div>
          </div>

          <a
            href={craft.pdf_url}
            className="bg-[#43B756] p-3 rounded-full text-center text-white w-[120px] "
            download
          >
            Download
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-3 my-4">
        <a
          href="/paidikes-ergasies"
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
        {/*    {auth.user.data.roles[0] === "admin" && (
          <div className="flex items-center justify-center w-full gap-3 my-4">
            <button
              onClick={handleDelete}
              className="bg-[#f53333] flex items-center p-3 text-white font-bold mynerve rounded-full gap-2"
            >
              Delete Craft
            </button>

            <a
              href={`/paidikes-ergasies/${craft.id}/edit`}
              className="bg-[#4ff985] flex items-center p-3 text-white font-bold mynerve rounded-full gap-2"
            >
              Edit
            </a>
          </div>
        )} */}
      </div>
    </PageLayout>
  );
};

export default CraftItem;
