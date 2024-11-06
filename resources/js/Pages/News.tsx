import { Link } from "@inertiajs/react";

export default function News() {
    return (
        <div className="bg-[#CDECE6]  pt-2 sm:p-8">
            <div className="flex flex-col items-center justify-center gap-2 my-10 text-center ">
                <h1 className="text-2xl font-bold text-[#0B2558] font-chewy">
                    Τα νέα μας
                </h1>
                <Link
                    className="bg-[#FFC968] px-3 rounded-xl py-1 text-white font-semibold font-chewy hover:bg-white hover:text-[#283F71] transition duration-300"
                    href="/blog"
                >
                    Δες Περισότερρα
                </Link>
            </div>
            {/* TA NEA */}
            <div className="flex flex-col flex-wrap justify-center w-full sm:flex-row">
                <div className=" w-[300px] sm:w-[370px] mx-auto  rounded-xl">
                    <div className="p-6">
                        <img
                            className="w-full rounded-xl"
                            src="/Images/babyAndmOm.jpg"
                            alt="Baby and a woman playing along"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 pb-6 sm:px-6">
                        {/* Post metadata */}
                        <div className="text-sm text-center text-[#78D3EF] font-chewy">
                            <span>October 29, 2024 by </span>
                            <span className="font-semibold">Author's Name</span>
                        </div>
                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#283F71] text-center font-chewy">
                            Πως να διδαξετε το παιδι
                        </h2>
                        {/* Link with arrow icon */}
                        <Link
                            className="text-[#FF9DB7] rounded-full py-1 px-3 text-sm font-bold flex font-chewy items-center group transition-all duration-300"
                            href=""
                        >
                            Δειτε περισοτερρα
                            <span className="ml-2 transition-transform duration-300 group-hover:-translate-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 transform group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="w-[300px] sm:w-[370px] mx-auto rounded-xl ">
                    <div className="p-6">
                        <img
                            className="w-full rounded-xl"
                            src="/Images/babyAndmOm.jpg"
                            alt="Baby and a woman playing along"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 px-6 pb-6">
                        {/* Post metadata */}
                        <div className="text-sm text-center text-[#78D3EF] font-chewy">
                            <span>October 29, 2024 by </span>
                            <span className="font-semibold">Author's Name</span>
                        </div>
                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#283F71] text-center font-chewy">
                            Πως να διδαξετε το παιδι
                        </h2>
                        {/* Link with arrow icon */}
                        <Link
                            className="text-[#FF9DB7] rounded-full py-1 px-3 text-sm font-bold flex font-chewy items-center group transition-all duration-300"
                            href=""
                        >
                            Δειτε περισοτερρα
                            <span className="ml-2 transition-transform duration-300 group-hover:-translate-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 transform group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className=" w-[300px] sm:w-[370px] mx-auto rounded-xl">
                    <div className="p-6">
                        <img
                            className="w-full rounded-xl"
                            src="/Images/babyAndmOm.jpg"
                            alt="Baby and a woman playing along"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 px-6 pb-6">
                        {/* Post metadata */}
                        <div className="text-sm text-center text-[#78D3EF] font-chewy">
                            <span>October 29, 2024 by </span>
                            <span className="font-semibold">Author's Name</span>
                        </div>
                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#283F71] text-center font-chewy">
                            Πως να διδαξετε το παιδι
                        </h2>
                        {/* Link with arrow icon */}
                        <Link
                            className="text-[#FF9DB7] rounded-full py-1 px-3 text-sm font-bold flex font-chewy items-center group transition-all duration-300"
                            href=""
                        >
                            Δειτε περισοτερρα
                            <span className="ml-2 transition-transform duration-300 group-hover:-translate-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 transform group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* Repeat the above structure for other cards */}
            </div>
        </div>
    );
}
