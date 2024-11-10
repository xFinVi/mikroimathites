// resources/js/Pages/About.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";

const About = ({ auth }: PageProps) => {
    return (
        <PageLayout auth={auth}>
            <Head title="Η ομάδα μας" />
            <div className="w-full   bg-gradient-to-b from-[#fff2da] to-[#F7F7F7] ">
                <div
                    className="relative flex flex-col items-center justify-center h-auto pt-24 mt-20 xs:pt-36 xs:py-40"
                    style={{
                        backgroundImage: `url('Images/colorbg.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Main Content */}
                    <div className="p-6 xs:w-full flex-1  font-bold text-[#F27EB1]  bg-white  rounded-md shadow-md text-center">
                        <h2 className="xs:text-4xl sm:text-5xl">
                            {" "}
                            Η ομάδα μας
                        </h2>
                        <p className="p-2  xs:text-2xl  sm:text-2xl text-center text-[#7AD4F0] bg-opacity-50">
                            Ελάτε να γνωριστούμε
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
                            src="Images/VictoriaPink.png"
                            className="w-full sm:w-[200px] h-auto object-contain"
                            alt="Η δασκάλα Κυρία Βικτωρία  "
                        />
                    </div>
                    <div className="w-full h-auto col-span-2 sm:col-span-2 bg-[#F898C1]  shadow-md  rounded-xl lg:text-xl flex justify-center roboto items-center sm:px-14 xs:p-6">
                        <p className="mt-4 text-sm lg:text-xl  text-[#073b4c] ">
                            Γεια σας! Είμαι η Κυρια Βικτωρία, μαμά ενός υπέροχου
                            κοριτσιού, που αποτελεί την έμπνευση πίσω από όλο
                            αυτό το έργο. Με πτυχίο στη διδασκαλία της ελληνικής
                            γλώσσας ως δεύτερης ξένης, σεμινάριο εξειδίκευσης
                            στον αυτισμό, καθώς και εκπαίδευση πρώιμης παιδικής
                            ηλικίας, εργάζομαι σε ελληνικό σχολείο στο Ηνωμένο
                            Βασίλειο. Η αγάπη μας για την ανακάλυψη, το παιχνίδι
                            και την έκφραση μας οδήγησε να δημιουργήσουμε αυτό
                            το κανάλι για τα μικρά μας μαζι με τον άντρα μου.
                        </p>
                    </div>
                    <div className="w-full h-auto col-span-2   sm:col-span-2 roboto bg-[#93D4BC]  rounded-xl flex justify-center items-center sm:px-14 xs:p-6">
                        <p className="mt-4 lg:text-xl  text-sm text-[#073b4c] ">
                            Ο στόχος μας είναι να δημιουργήσουμε μια ασφαλή και
                            χαρούμενη γωνιά για εσάς και τα παιδιά σας, γεμάτη
                            από δημιουργικές δραστηριότητες και όμορφες στιγμές
                            μάθηση και διασκέδασης. Μέσα από τα βίντεό μας,
                            ενθαρρύνουμε τα παιδιά να ανακαλύπτουν τον κόσμο
                            γύρω τους και να αναπτύσσουν τη φαντασία τους,καθώς
                            και την προώθηση διαδραστικού περιεχομένου για να
                            ακολουθούν τα παιδιά. Κάθε βίντεο είναι φτιαγμένο
                            μετά απο πολύ έρευνα, και μελέτη προσφέροντας
                            πολύτιμο χρόνο για γονείς και παιδιά.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full h-auto rounded-xl xs:col-span-2 sm:col-span-1 xs:row-span-2 sm:row-span-1">
                        <div className="w-full h-auto flex-col  bg-[#ee4266] sm:h-[100%]    rounded-xl flex justify-center items-center">
                            <img
                                src="Images/brunoBlue.png"
                                className="object-contain w-full h-auto xs:w-2/3 sm:w-2/3 md:w-2/3"
                                alt="ο μπλέ ήρωας Μπρούνο"
                            />
                            <h4 className="pb-6 text-xl text-white lg:text-2xl mynerve ">
                                Εγώ είμαι ο Μπρούνο
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full h-auto rounded-xl xs:col-span-2 sm:col-span-1 xs:row-span-2 sm:row-span-1">
                        <div className="w-full h-[100%] flex-col  bg-[#4361ee] sm:h-[100%]    rounded-xl flex justify-center items-center">
                            <img
                                src="Images/jerry.png"
                                className="object-contain w-full h-auto xs:w-2/3 sm:w-2/3 md:w-2/3"
                                alt="Ο πράσινος ήρωας τζέρι"
                            />
                            <h4 className="flex-1 pb-6 text-xl text-white lg:text-2xl mynerve ">
                                Εγώ είμαι ο Τζέρι
                            </h4>
                        </div>
                    </div>
                    <div className="w-full h-auto col-span-2  bg-[#FFC078] rounded-xl flex justify-center items-center">
                        {" "}
                        <p className="mt-4 text-sm lg:text-xl text-[#3b246f] roboto sm:px-14 xs:p-6">
                            Οραματιζόμαστε έναν νέο κόσμο μάθησης για τα παιδιά
                            μας στον ελληνικό χώρο του YouTube, όπου η
                            τεχνολογία γίνεται σύμμαχος στη γνώση. Θέλουμε να
                            ενθαρρύνουμε τους μικρούς μας φίλους να εξερευνούν,
                            να ανακαλύπτουν και να μαθαίνουν μέσα από
                            διαδραστικά βίντεο που τους κρατούν διαρκώς εν
                            δράση. Καθώς η τεχνολογία μπαίνει στη ζωή από μικρή
                            ηλικία, προσπαθούμε να δώσουμε στα παιδιά την
                            ευκαιρία να απολαύσουν τα οφέλη της, αναπτύσσοντας
                            δεξιότητες και φαντασία με χαρά και ασφάλεια.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default About;
