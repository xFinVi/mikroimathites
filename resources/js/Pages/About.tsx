// resources/js/Pages/About.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import { useState, useEffect } from "react";

const About = ({ auth }: PageProps) => {
    return (
        <PageLayout auth={auth}>
            <Head title="About Us" />
            <div className="w-full   bg-gradient-to-b from-[#fff2da] to-[#F7F7F7] ">
                <div className="flex relative flex-col items-center justify-center pt-24 xs:pt-36 xs:py-40 mt-20 bg-[url('/Images/colorbg.jpg')] bg-cover bg-no-repeat bg-center h-auto">
                    {/* Main Content */}
                    <div className="p-6 xs:w-2/3 font-bold text-[#F27EB1]  bg-white  rounded-md shadow-md text-center">
                        <h2 className="xs:text-lg sm:text-3xl">
                            {" "}
                            Καλώς ήρθατε στον κόσμο των μικρών μαθητών
                        </h2>
                        <p className="p-2  xs:text-sm  sm:text-lg text-center text-[#7AD4F0] bg-opacity-50">
                            Ελάτε μαζί μας να δημιουργήσουμε έναν κόσμο απόλυτης
                            χαράς και εκπαίδευσης!
                        </p>
                    </div>
                    {/*
                    <div className="flex-1 md:w-[550px] sm:flex hidden -mt-20 z-[100]">
                        <img
                            src="/Images/house-withvictoria.png"
                            alt="House"
                            className="w-full h-auto"
                        />
                    </div>

                   
                     <div className="absolute bottom-0 left-0 w-full h-40  bg-[#00cc66] to-transparent"></div> */}
                </div>

                <div className="grid sm:grid-cols-3 xs:grid-cols-2 gap-4 px-4 bg-[#FAF5EF] py-4 xl:grid-cols-3">
                    <div className="w-full h-auto bg-[#ffadad] xs:col-span-2 sm:col-span-1 col-span-2  rounded-xl flex justify-center items-center">
                        <img
                            src="/Images/victoriaPink.png"
                            className="w-full sm:w-[200px] h-auto object-contain"
                            alt=""
                        />
                    </div>
                    <div className="w-full h-auto col-span-2 sm:col-span-2 bg-[#F898C1] backdrop-blur-sm shadow-md  rounded-xl lg:text-xl flex justify-center items-center sm:px-14 xs:p-6">
                        <p className="mt-4 text-sm lg:text-xl  text-[#073b4c] ">
                            Γεια σας! Είμαι η Κυρια Βικτωρία, μαμά ενός υπέροχου
                            κοριτσιού, που αποτελεί την έμπνευση πίσω από όλο
                            αυτό το εγχείρημα. Με πτυχίο στη διδασκαλία της
                            ελληνικής γλώσσας ως δεύτερης ξένης, σεμινάριο
                            εξειδίκευσης στον αυτισμό, καθώς και εκπαίδευση
                            πρώιμης παιδικής ηλικίας, εργάζομαι σε ελληνικό
                            σχολείο. Η αγάπη μας για την ανακάλυψη, το παιχνίδι
                            και την έκφραση μας οδήγησε να δημιουργήσουμε αυτό
                            το κανάλι για τα μικρά μας.
                        </p>
                    </div>
                    <div className="w-full h-auto col-span-2   sm:col-span-2 bg-[#93D4BC] rounded-xl flex justify-center items-center sm:px-14 xs:p-6">
                        <p className="mt-4 lg:text-xl  text-sm text-[#073b4c] ">
                            Ο στόχος μας είναι να δημιουργήσουμε μια ασφαλή και
                            χαρούμενη γωνιά για εσάς και τα παιδιά σας, γεμάτη
                            από δημιουργικές δραστηριότητες και όμορφες στιγμές
                            μάθησης. Μέσα από τα βίντεό μας, ενθαρρύνουμε τα
                            παιδιά να ανακαλύπτουν τον κόσμο γύρω τους και να
                            αναπτύσσουν τη φαντασία τους. Κάθε βίντεο είναι
                            φτιαγμένο με αγάπη, προσφέροντας πολύτιμο χρόνο για
                            γονείς και παιδιά.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full h-auto rounded-xl xs:col-span-2 sm:col-span-1 xs:row-span-2 sm:row-span-1">
                        <div className="w-full h-auto flex-col  bg-[#ee4266] sm:h-[100%]    rounded-xl flex justify-center items-center">
                            <img
                                src="/Images/brunoBlue.png"
                                className="object-contain w-full h-auto xs:w-2/3 sm:w-2/3 md:w-2/3"
                                alt=""
                            />
                            <h4 className="pb-6 text-xl text-white lg:text-2xl font-chewy ">
                                Εγώ είμαι ο Μπρούνο
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full h-auto rounded-xl xs:col-span-2 sm:col-span-1 xs:row-span-2 sm:row-span-1">
                        <div className="w-full h-[100%] flex-col  bg-[#4361ee] sm:h-[100%]    rounded-xl flex justify-center items-center">
                            <img
                                src="/Images/jerry.png"
                                className="object-contain w-full h-auto xs:w-2/3 sm:w-2/3 md:w-2/3"
                                alt=""
                            />
                            <h4 className="flex-1 pb-6 text-xl text-white lg:text-2xl font-chewy ">
                                Εγώ είμαι ο Τζέρι
                            </h4>
                        </div>
                    </div>
                    <div className="w-full h-auto col-span-2  bg-[#FFC078] rounded-xl flex justify-center items-center">
                        {" "}
                        <p className="mt-4 text-sm lg:text-xl text-[#3b246f] sm:px-14 xs:p-6">
                            Συνδυάζουμε τη μάθηση με τη διασκέδαση, προσφέροντας
                            χρωματιστές χειροτεχνίες, παιχνίδια και τραγούδια.
                            Σας ευχαριστούμε που είστε εδώ για να μοιραστείτε
                            αυτές τις ξεχωριστές στιγμές μαζί μας!
                        </p>
                    </div>

                    {/*  */}
                </div>
            </div>
        </PageLayout>
    );
};

export default About;
