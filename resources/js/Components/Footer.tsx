// Footer.tsx
import React from "react";
import { Link } from "@inertiajs/react"; // Change to Inertia Link
import Newsletter from "./Newsletter";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-100 bg-[#283F71]">
      {/* Newsletter */}

      {/* Footer */}
      <footer className="z-10 px-6 py-16 text-sm text-center text-black dark:text-white/70">
        <div className="flex flex-col items-center justify-center w-full mx-auto sm:w-2/3">
          <Link
            href="/" // Use Inertia Link for internal routes
            className="flex items-center justify-center w-[150px] max-h-[100px]"
          >
            <img
              src="Images/logoMikroimathites.png"
              alt="Mikroi Mathites Logo"
              className="max-h-[80px]"
            />
          </Link>
          <p className="mt-4 text-sm text-center text-white">
            Ελάτε να ανακαλύψουμε τον κόσμο παρέα με τους{" "}
            <span className="text-[#FF9DB7] font-bold pr-1">Μικρούς</span>
            <span className="text-[#78D3EF] font-bold">Μαθητές</span>, μέσα από
            παιχνίδια, τραγούδια και φανταστικές περιπέτειες! Με κάθε βήμα
            μαθαίνουμε, δημιουργούμε και χτίζουμε τη δική μας ζωή γεμάτη
            χρώματα, ιδέες και όνειρα!
          </p>
          <div className="flex items-center justify-center gap-6 my-4">
            <a
              href="https://www.facebook.com/profile.php?id=61553477665097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#C13584] rounded-full shadow-md hover:shadow-lg">
                <FaFacebook
                  className="text-[#fff] hover:scale-110 transition-transform duration-300"
                  size={24}
                />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@mikroimathites?is_from_webapp=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#FFD44E] rounded-full shadow-md hover:shadow-lg">
                <FaTiktok
                  className="text-white transition-transform duration-300 hover:scale-110"
                  size={24}
                />
              </div>
            </a>
            <a
              href="https://youtube.com/@mikroimathites?si=O-22wIg2H9e8F60C"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#FF0000] rounded-full shadow-md hover:shadow-lg">
                <FaYoutube
                  className="text-[#fff] hover:scale-110 transition-transform duration-300"
                  size={24}
                />
              </div>
            </a>
          </div>
        </div>

        <div>Copyrights 2024 Mikroi Mathites. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;
