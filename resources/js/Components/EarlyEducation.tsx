import React from "react";

const EarlyEducation = () => {
    return (
        <div
            className="bg-[#FCF9F4] xs xs:h-[80vh] sm:h-[70vh] mb-20 xs:px-6 sm:px-24 flex flex-col items-center gap-5 p-4 lg:flex-row"
            style={{
                backgroundImage: `url('images/bg.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
        >
            <div className="flex-1 xs:w-full sm:w-3/5 lg:w-2/5 group">
                {/* Image */}
                <img
                    className="object-cover w-full h-full rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-[45px] group-hover:translate-y-[45px]"
                    src="/Images/babyAndmOm.jpg"
                    alt="Baby and a woman playing along"
                />
            </div>

            <div className="flex flex-col items-center flex-1 p-0 space-y-4 w-100 md:p-4">
                <h1 className="font-chewy xs:text-2xl lg:text-3xl font-extrabold text-[#0B2558] text-center sm:text-lg">
                    Ξεκινάμε απο νωρίς
                </h1>
                <h1 className="font-chewy text-3xl text-center md:text-xl sm:text-lg lg:text-3xl font-extrabold text-[#0B2558]">
                    Η Εκπαίδευση Έχει Σημασία
                </h1>
                <p className="text-[#555] text-center text-base px-6 sm:px-2 ">
                    Κοιτάξτε στα μάτια ενός μικρού παιδιού και δείτε τη λάμψη
                    και το θαύμα που κρύβει. Εδώ στους Μικρούς μαθητές,
                    πιστεύουμε ότι αυτά τα μικρά πάθη και ενδιαφέροντα μπορούν
                    να γίνουν τα θεμέλια για ένα ξεχωριστό μέλλον. Κάθε μέρα,
                    δουλεύουμε με αγάπη και φροντίδα για να βοηθήσουμε κάθε
                    παιδί να αναπτυχθεί και να εξελιχθεί με τον δικό του
                    μοναδικό τρόπο.
                </p>
                {/*   <button className="bg-[#FFC968] text-[#0B2558] font-fredoka px-8 py-3 mt-8 font-bold rounded-full border-2 text-md border-[#0B2558]">
                    Διαβάστε Περισσότερα
                </button> */}
            </div>
        </div>
    );
};

export default EarlyEducation;
