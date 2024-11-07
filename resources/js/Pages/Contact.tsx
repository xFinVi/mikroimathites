// resources/js/Pages/About.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Confetti from "react-confetti";

import { Particles } from "@tsparticles/react";

const Contact = ({ auth }: PageProps) => {
    const [error, setError] = useState<string>("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [csrfToken, setCsrfToken] = useState<string>("");
    const [formData, setFormData] = useState<{
        name: string;
        last_name: string;
        email: string;
        message: string;
    }>({
        name: "",
        last_name: "",
        email: "",
        message: "",
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const message = { ...formData };
            const response = await axios.post("/contact", message, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
            });
            setSuccessMessage(
                "Ευχαριστούμε για την επικοινωνία σας. Θα απαντήσουμε σύντομα!"
            );
            setError("");
            setShowConfetti(true);
            setFormData({
                name: "",
                last_name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Error:", error);
            setError(
                "Υπήρξε πρόβλημα με την αποστολή του μηνύματος. Προσπαθήστε ξανά."
            );
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage("");
            setShowConfetti(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <PageLayout auth={auth}>
            <Head title="About Us" />
            <div
                className="w-full flex flex-col justify-center items-center md:h-[85vh]  pt-80 sm:mt-20  lg:h-[90vh] xs:h-[90vh] sm:h-[80vh] p-6 py-44 bg-gradient-to-b from-[#fff2da] to-[#F7F7F7]"
                style={{
                    backgroundImage: `url('images/nightcont.png')`,
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

                <div className="w-full p-8 mx-auto bg-white border border-white rounded-lg shadow-lg bg-opacity-70 backdrop-blur-md md:w-3/5 lg:w-2/5">
                    <h1 className="text-4xl text-center font-chewy text-[#0096CF] w-full py-4 mb-4">
                        Φόρμα επικοινωνίας
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full h-full" // Removed padding from the form
                    >
                        {error && (
                            <div className="mt-4 text-red-500">{error}</div>
                        )}
                        {successMessage && (
                            <div className="p-4 mt-4 font-bold text-white bg-green-600 rounded-lg">
                                {successMessage}
                            </div>
                        )}
                        <div className="relative z-0 w-full mb-5 group">
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
                                className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#F4C538] peer-focus:dark:text-[#F4C538] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
                            >
                                Όνομα
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="last_name" // Changed from "name" to "surname"
                                value={formData.last_name} // You might need to add this to your formData state
                                onChange={handleChange}
                                id="surname" // Changed from "name" to "surname"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="surname"
                                className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2598DA] peer-focus:dark:text-[#2598DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
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
                                className="peer-focus:font-medium font-bold  absolute text-lg text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#EE3159] peer-focus:dark:text-[#EE3159]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                id="like"
                                className="block w-full px-2 py-4 text-sm text-gray-900 transition-all duration-300 translate-y-6 border-2 border-t-0 border-l-0 border-r-0 rounded-lg shadow-sm outline-none appearance-none bg-gra h-28 dark:border-gray-600 peer"
                                placeholder="Γράψε το μήνυμά σου εδώ "
                                required
                            />
                            <label
                                htmlFor="like"
                                className="peer-focus:font-medium font-bold absolute text-md text-gray-900 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/5 peer-focus:text-[#55399a] peer-placeholder-shown:-translate-y-4 peer-focus:scale-95 peer-focus:-translate-y-6"
                            >
                                Μήνυμα
                            </label>
                        </div>

                        <div className="flex items-center justify-center w-full pt-4">
                            <button
                                type="submit"
                                className="text-white bg-[#00BD62] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg w-full sm:w-auto px-8 py-2.5 text-center hover:bg-[#00BD62] active:scale-90 transition-transform duration-100 "
                            >
                                Αποστολή
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
};

export default Contact;
