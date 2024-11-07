import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { ReactElement, useState } from "react";

export default function Dashboard() {
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-center text-gray-900">
                            Είσαι συνδεδεμένος!
                        </div>
                        <div>
                            <div className="flex justify-center my-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                                >
                                    Στείλε στην Βικτωρία
                                </button>
                            </div>
                            {isModalOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001845] bg-opacity-90">
                                    <div className="w-[350px] relative p-8 bg-white border border-white rounded-lg shadow-lg  xs:mx-auto sm:mx-0 ">
                                        <h1 className="text-2xl  text-center font-chewy text-[#0096CF] w-full py-4 mb-4">
                                            Στείλε μήνυμα στην Βικτωρία
                                        </h1>

                                        <button
                                            onClick={() =>
                                                setIsModalOpen(false)
                                            }
                                            className="absolute text-3xl text-gray-500 top-4 right-4 hover:text-gray-700"
                                        >
                                            &times;
                                        </button>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="w-full h-full" // Removed padding from the form
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value="{{ csrf_token() }}"
                                            />
                                            {error && (
                                                <div className="mt-4 text-red-500">
                                                    {error}
                                                </div>
                                            )}
                                            {successMessage && (
                                                <div className="p-4 mt-4 font-bold text-white bg-green-600 rounded-lg">
                                                    {successMessage}
                                                </div>
                                            )}

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
                                                    className="peer-focus:font-medium font-bold  absolute text-lg text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#54c147] peer-focus:dark:text-[#54c147]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
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
                                                    className="peer-focus:font-medium font-bold absolute text-md text-gray-900 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/5 peer-focus:text-[#8a4db3] peer-placeholder-shown:-translate-y-4 peer-focus:scale-95 peer-focus:-translate-y-6"
                                                >
                                                    Μήνυμα
                                                </label>
                                            </div>

                                            <div className="flex items-center justify-center w-full pt-4">
                                                <button
                                                    type="submit"
                                                    className="text-white bg-[#00BD62] focus:ring-4 focus:outline-none focus:ring-[#00BD62] font-bold rounded-lg text-lg w-full sm:w-auto px-8 py-2.5 text-center hover:bg-[#00BD62] active:scale-90 transition-transform duration-100 "
                                                >
                                                    Αποστολή
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
