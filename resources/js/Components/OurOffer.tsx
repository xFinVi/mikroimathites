import React from "react";

const OurOffer = () => {
    return (
        <div className="w-full p-6 mx-auto my-20 text-center rounded-lg sm:w-2/3">
            <div className="flex flex-col items-center justify-center pb-4 mx-auto mb-8">
                <h1 className="text-3xl lg:text-3xl md:text-2xl sm:text-2xl pb-4 mb-6 font-bold w-100 px-6 text-[#0B2558] relative after-line">
                    Τι προσφέρουμε σε εσάς
                </h1>
                <p className="relative w-full sm:w-3/4 md:text-lg text-[#112856] sm:text-sm">
                    Η αποστολή των Μικρών μαθητών είναι να παρέχει ποιοτική
                    πρώιμη εκπαίδευση , πολύ παιχνίδι, διασκέδαση και να κάνει
                    την εκπαίδευση παιχνίδι.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Individual offerings */}
                <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md group">
                    <img
                        className="w-40"
                        src="Images/SVGs-Icons/5.png"
                        alt="Κοινωνική και Συναισθηματική Ανάπτυξη"
                    />
                    <h2 className="text-xl md:text-xl sm:text-lg font-bold text-[#0B2558] group-hover:text-[#ffb8cb] transition duration-300">
                        Κοινωνική και Συναισθηματική Ανάπτυξη
                    </h2>
                    <p className="mt-2 text-lg text-center text-[#0b2558a4]">
                        Ενισχύουμε τη συνεργασία, την ενσυναίσθηση και τις
                        πρώτες φιλίες.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md group">
                    <img
                        className="w-40"
                        src="Images/SVGs-Icons/6.png"
                        alt="Γλωσσική Ανάπτυξη και Επικοινωνία"
                    />
                    <h2 className="text-xl md:text-xl sm:text-lg font-bold text-[#0B2558] group-hover:text-[#ffb8cb] transition duration-300">
                        Γλωσσική Ανάπτυξη και Επικοινωνία
                    </h2>
                    <p className="mt-2 text-lg text-center text-[#0b2558a4]">
                        Μαθαίνουμε τα πρώτα λόγια, εκφραζόμαστε και συνδεόμαστε
                        με άλλους.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md group">
                    <img
                        className="w-40"
                        src="Images/SVGs-Icons/21.png"
                        alt="Κινητικές Δεξιότητες"
                    />
                    <h2 className="text-xl md:text-xl sm:text-lg font-bold text-[#0B2558] group-hover:text-[#ffb8cb] transition duration-300">
                        Κινητικές Δεξιότητες
                    </h2>
                    <p className="mt-2 text-lg text-center text-[#0b2558a4]">
                        Αναπτύσσουμε τη λεπτή και αδρή κινητικότητα με
                        διασκεδαστικές ασκήσεις.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md group">
                    <img
                        className="w-40"
                        src="Images/SVGs-Icons/18.png"
                        alt="Γνωστικές Δεξιότητες"
                    />
                    <h2 className="text-xl md:text-xl sm:text-lg font-bold text-[#0B2558] group-hover:text-[#ffb8cb] transition duration-300">
                        Γνωστικές Δεξιότητες
                    </h2>
                    <p className="mt-2 text-lg text-center text-[#0b2558a4]">
                        Ενθαρρύνουμε την εξερεύνηση, την περιέργεια και τη λύση
                        προβλημάτων.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md group">
                    <img
                        className="w-40"
                        src="Images/SVGs-Icons/19.png"
                        alt="Αισθητηριακή Ανάπτυξη"
                    />
                    <h2 className="text-xl md:text-xl sm:text-lg font-bold text-[#0B2558] group-hover:text-[#ffb8cb] transition duration-300">
                        Αισθητηριακή Ανάπτυξη
                    </h2>
                    <p className="mt-2 text-lg text-center text-[#0b2558a4]">
                        Εμπλουτίζουμε τις αισθήσεις μέσω διαδραστικών και
                        φυσικών εμπειριών.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md group">
                    <img
                        className="w-40"
                        src="Images/SVGs-Icons/15.png"
                        alt="Συμβουλές για Γονείς"
                    />
                    <h2 className="text-xl md:text-xl sm:text-lg font-bold text-[#0B2558] group-hover:text-[#ffb8cb] transition duration-300">
                        Συμβουλές για Γονείς
                    </h2>
                    <p className="mt-2 text-lg text-center text-[#0b2558a4]">
                        Μοιραζόμαστε ιδέες, συμβουλές και ενθαρρύνουμε τη
                        συνεργασία γονέων και δασκάλων.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;
