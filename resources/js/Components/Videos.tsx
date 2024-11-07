import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

// Define types for the playlist data
interface Playlist {
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
        description: string;
    };
}

export default function Videos() {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

    const colors = ["#FF9DB7", "#16B2DC", "#FFC66E"];

    const promotionalVideo = {
        id: "9z7R4nYWMME",
        snippet: {
            title: "Μαθαίνω Τα Φρούτα με την Βικτωρία | Εκπαιδευτικά Βίντεο | Παιδικά Τραγούδια - Greek Nursery Rhymes",
        },
    };

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&key=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch playlists");
                }

                const data = await response.json();
                setPlaylists(data.items || []);
            } catch (error) {
                console.error("Error fetching playlists:", error);
            }
        };

        fetchPlaylists();
    }, [API_KEY, CHANNEL_ID]);

    return (
        <div className="z-10 w-full mx-auto pt-10 bg-[#FCF9F4]">
            <Head title="Video" />

            <div className="grid w-full grid-cols-2 gap-4 px-6 mx-auto sm:w-3/4 place-items-center z-[100] relative ">
                {/* First Main Card (spans the first column) */}
                <div className="z-[1000] col-span-3 md:col-span-1 bg-[#d0bcf1] rounded-lg shadow-md">
                    <div className="flex justify-center rounded-lg">
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube-nocookie.com/embed/${promotionalVideo?.id}`}
                            title={promotionalVideo.snippet.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                    <span className="block w-full h-6 bg-[#953E94]"></span>
                    <h5 className="mb-2 p-2 text-center text-xl font-light text-[#953E94]">
                        {promotionalVideo.snippet.title}
                    </h5>
                    <p className="mb-4 text-base text-[#777] text-center">
                        Μαθαίνω με την Βικτωρία
                    </p>
                </div>
                <div className="col-span-3 md:col-span-1 bg-[#d0bcf1] rounded-lg shadow-md">
                    <div className="flex justify-center rounded-lg">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/Ay-pmyWQa34?si=cBbhX9arRSFCJxoP"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <span className="block w-full h-6 bg-[#953E94]"></span>
                    <h5 className="mb-2 p-2 text-center text-xl font-light text-[#953E94]">
                        {promotionalVideo.snippet.title}
                    </h5>
                    <p className="mb-4 text-base text-[#777] text-center">
                        Μαθαίνω με την Βικτωρία
                    </p>
                </div>

                {/*  <div className="col-span-3 md:col-span-2 bg-[#e3f4da] rounded-lg shadow-md w-full h-full">
                    <h5 className="mb-4 text-xl font-light text-[#953E94] p-4">
                        Sidebar
                    </h5>
                    <p className="p-4 text-base text-[#777]">
                        This is the sidebar content that spans 2 columns.
                    </p>
                </div> */}
            </div>
            <div className=" bg-[#FCF9F4] xs:py-12 sm:py-32">
                <h1 className="font-chewy lg:text-3xl py-10 font-extrabold text-[#364263] text-center text-4xl bg-[#7AD4F0] w-full">
                    Δείτε τα βιντεο μας
                </h1>
                <div className="max-w-screen-xl p-5 mx-auto sm:p-10 md:p-16">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 sm:grid-cols-2">
                        {playlists.slice(0, 3).map((playlist, index) => (
                            <div
                                key={playlist.id}
                                className={`rounded overflow-hidden shadow-lg relative ${
                                    colors[index % colors.length]
                                }`}
                                style={{
                                    backgroundColor:
                                        colors[index % colors.length],
                                }}
                            >
                                <a
                                    href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={
                                            playlist.snippet.thumbnails.high.url
                                        }
                                        alt={playlist.snippet.title}
                                        className="w-full h-[200px] object-cover"
                                    />
                                </a>

                                <div className="px-6 py-4">
                                    <a
                                        href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-lg text-center text-[#fff] hover:text-indigo-600 transition duration-500 ease-in-out inline-block min-h-14 w-full font-chewy"
                                    >
                                        {playlist.snippet.title}
                                    </a>
                                </div>
                                <div className="flex justify-center px-6 py-4">
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border text-black border-slate-800 bg-[linear-gradient(110deg,#FFFFFF,45%,#CDECE6,55%,#FFFFFF)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-fredoka font-bold">
                                        Δείτε τώρα
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
