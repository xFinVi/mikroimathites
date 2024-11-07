// resources/js/Pages/About.tsx
import React, { useState, useEffect } from "react";
import { PageProps } from "@/types";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import axios from "axios";

import Confetti from "react-confetti";
import PageLayout from "@/Layouts/PageLayout";
import { Head } from "@inertiajs/react";

const Competition = ({ auth }: PageProps) => {
    const [feedbacks, setFeedbacks] = useState<any[]>([]); // Replace 'any' with a more specific type if possible
    const [rating, setRating] = React.useState<number | null>(0);
    const [error, setError] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [csrfToken, setCsrfToken] = useState<string>("");

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        like: "",
        dont_like: "",
        rating: 0,
    });

    useEffect(() => {
        const tokenElement = document.querySelector('meta[name="csrf-token"]');

        if (tokenElement) {
            const token = tokenElement.getAttribute("content");
            axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
        } else {
            console.error("CSRF token not found");
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (
        event: React.SyntheticEvent,
        newRating: number | null
    ) => {
        if (newRating !== null) {
            console.log(newRating);
            setFormData({ ...formData, rating: newRating });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            like: formData.like,
            dont_like: formData.dont_like,
            rating: formData.rating,
        };

        try {
            const response = await axios.post("/competition", userData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            console.log("Success:", response.data);
            setSuccess("🎉 Καλή επιτυχία! 🎉");
            setShowConfetti(true);
            setError("");
            setFeedbacks([...feedbacks, userData]);
            setFormData({
                name: "",
                surname: "",
                email: "",
                like: "",
                dont_like: "",
                rating: 0,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 409) {
                    setError(error.response.data.error);
                } else {
                    setError("Registration failed. Please try again.");
                }
            } else {
                console.error("Unexpected error:", error);
                setError("An unexpected error occurred.");
            }
        }
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 8000);

            // Clean up the timer on component unmount
            return () => clearTimeout(timer);
        }
    }, [success]);

    return (
        <PageLayout auth={auth}>
            <Head title="Διαγωνισμός" />
            <div
                className="w-full flex h-full flex-col justify-center items-start md:h-[85vh] pt-40 sm:mt-20 sm:py-20 bg-[#4abef0] lg:h-[90vh]  p-6 relative "
                style={{
                    backgroundImage: `url('images/contactfo.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {showConfetti && (
                    <div>
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                        />
                    </div>
                )}
                <div className="w-full h-full p-6 bg-white rounded-lg shadow-xl md:mx-auto bg-opacity-70 md:w-4/5 lg:w-2/5 backdrop-blur-sm xs:m-0">
                    <h1 className="md:text-4xl xs:text-3xl md:py-0  text-center mynerve text-[#fb6f92] w-full sm:py-4 p-0 mb-2 ">
                        Δήλωσε τώρα συμμετοχή
                    </h1>
                    {/* <p className="text-lg text-center text-[#012a4a] font-chewy">
                        Και μπες στην κλήρωση για μια δωροκάρτα 50$
                    </p> */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full h-full py-8 mx-auto font-bold "
                    >
                        {error && (
                            <div className="mb-10 text-xl xs:text-lg  font-bold text-white bg-[#f24848] font-fredoka p-4 xs:p-2 rounded-xl">
                                {error}
                            </div>
                        )}
                        {successMessage && (
                            <div className="mt-4 text-green-500">
                                {successMessage}
                            </div>
                        )}
                        <div className="relative z-0 w-full mb-5 group ">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                id="name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="peer-focus:font-medium font-bold  absolute text-sm text-[#333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28a745] peer-focus:dark:text-[#28a745] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Όνομα
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                id="surname"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="surname"
                                className="peer-focus:font-medium font-bold  absolute text-sm text-[#333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2598DA] peer-focus:dark:text-[#2598DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Επίθετο
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium font-bold  absolute text-sm text-[#333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ff595e] peer-focus:dark:text-[#ff595e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-fredoka"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="like"
                                value={formData.like}
                                onChange={handleChange}
                                id="like"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="like"
                                className="peer-focus:font-medium font-bold  absolute text-sm text-[#333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00D535] peer-focus:dark:text-[#00D535] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Τι σας αρέσει στα βίντεο μας;
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="dont_like"
                                value={formData.dont_like}
                                onChange={handleChange}
                                id="dont_like"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="dont_like"
                                className="peer-focus:font-medium font-bold  absolute text-sm text-[#333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#bf1a2f] peer-focus:dark:text-[#bf1a2f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Τι δεν σας αρέσει ;
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <Box sx={{ "& > legend": { mt: 2 } }}>
                                <Typography component="legend">
                                    Βαθμολογία
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={formData.rating}
                                    onChange={handleRatingChange}
                                />
                            </Box>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <button
                                type="submit"
                                className="text-white bg-[#2fc151]  ffocus:ring-blue-300 font-medium rounded-lg text-sm w-[100%] px-5 py-2.5 text-center hover:bg-[#51e073] xs:text-xl "
                            >
                                Δήλωσε
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
};

export default Competition;
