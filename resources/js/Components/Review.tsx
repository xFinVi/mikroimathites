import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import Confetti from "react-confetti";

const Review: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<any[]>([]); // Replace 'any' with a more specific type if possible
    const [value, setValue] = React.useState<number | null>(0);
    const [error, setError] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        surName: "",
        email: "",
        like: "",
        dontLike: "",
        seeMore: "",
        rating: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (newRating: number) => {
        console.log(newRating);
        setFormData({ ...formData, rating: newRating });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            name: formData.name,
            surName: formData.surName,
            email: formData.email,
            like: formData.like,
            dontLike: formData.dontLike,
            seeMore: formData.seeMore,
            rating: formData.rating,
        };

        try {
            const response = await fetch(
                "http://localhost/FeedbackRESTAPI/PHP/API.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.json();
            console.log("Success:", responseData);
            // Handle success
            setSuccess("🎉 Καλή επιτυχία! 🎉");
            setShowConfetti(true);
            setError("");
            setFeedbacks([...feedbacks, userData]);
            setFormData({
                name: "",
                surName: "",
                email: "",
                like: "",
                dontLike: "",
                seeMore: "",
                rating: 0,
            });
        } catch (error) {
            console.error("Error:", error);
            setError("Registration failed");
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
        <div
            className="bg-[#FFF6E1] p-8"
            style={{
                backgroundImage: `url('images/confetti.png')`,
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
            <h1 className="py-6 my-6 text-4xl font-bold text-center text-[#283F71] font-chewy">
                ΔΗΛΩΣΕ ΣΥΜΜΕΤΟΧΗ
            </h1>
            <form onSubmit={handleSubmit} className="max-w-md py-8 mx-auto">
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
                        className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#F4C538] peer-focus:dark:text-[#F4C538] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Όνομα
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="surname" // Changed from "name" to "surname"
                        value={formData.surName || ""} // You might need to add this to your formData state
                        onChange={handleChange}
                        id="surname" // Changed from "name" to "surname"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="surname"
                        className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2598DA] peer-focus:dark:text-[#2598DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                        className="peer-focus:font-medium font-bold  absolute text-lg text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#EE3159] peer-focus:dark:text-[#EE3159]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                        className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00D535] peer-focus:dark:text-[#00D535] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Τι σας αρέσει στα βίντεο μας;
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="dontLike"
                        value={formData.dontLike}
                        onChange={handleChange}
                        id="dontLike"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="dontLike"
                        className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EA16BE] peer-focus:dark:text-[#EA16BE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Τι δεν σας αρέσει ;
                    </label>
                </div>
                {/*   <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="seeMore"
                    value={formData.seeMore}
                    onChange={handleChange}
                    id="seeMore"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="seeMore"
                    className="peer-focus:font-medium font-bold  absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Τι θα θέλατε να δείτε περισσότερο;
                </label>
            </div> */}

                <div className="relative z-0 w-full mb-5 group">
                    <Box sx={{ "& > legend": { mt: 2 } }}>
                        <Typography component="legend">Βαθμολογία</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div>

                <button
                    type="submit"
                    className="text-white bg-[#f97383]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-[#ffc3ca] "
                >
                    Submit
                </button>
                {error && <div className="mt-4 text-red-500">{error}</div>}
                {successMessage && (
                    <div className="mt-4 text-green-500">{successMessage}</div>
                )}
            </form>
        </div>
    );
};

export default Review;
