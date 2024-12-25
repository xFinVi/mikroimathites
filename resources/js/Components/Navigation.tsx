"use client";

import { useState, useEffect } from "react";
import { PageProps } from "@/types";

import classNames from "classnames";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
("@heroicons/react/24/outline");

import { Link } from "@inertiajs/react";

export default function Navigation({ auth }: PageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if the user is scrolling down or up
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setVisible(false); // Hide navbar when scrolling down
    } else {
      setVisible(true); // Show navbar when scrolling up
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 mynerve w-full h-[110px] p-1 transition-all duration-300 ease-in-out z-[1021] ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        } ${mobileMenuOpen ? "animate-bg-transition" : "bg-white"} shadow-xl`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between w-full h-[100%] lg:px-2"
        >
          <div
            className="flex justify-center items-center
                      h-full ml-auto mr-8  lg:hidden z-[102]"
          >
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={classNames(
                "tham tham-e-squeeze  tham-h-14 tham-w-10 pl-2",
                {
                  "tham-active": mobileMenuOpen,
                }
              )}
              aria-label="Toggle menu"
            >
              <div className="tham-box">
                <div className="tham-inner" />
              </div>
            </button>
          </div>
          <PopoverGroup className="relative hidden w-3/4 ml-auto lg:flex justify-center lg:gap-x-2 h-[100%]">
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="rounded-md bg-[#b15eec] px-4 py-1.5 flex items-center text-white lg:text-md transition hover:bg-[#9f51d6] focus:outline-none"
              >
                Αρχική
              </a>
              <Link
                href={route("Δημιουργίες")}
                className="rounded-lg bg-[#e82828fa] px-4 py-1.5  flex items-center text-white lg:text-md transition hover:bg-[#ffc31e] focus:outline-none"
              >
                Δημιουργίες
              </Link>
              <Link
                href={route("blog")}
                className="rounded-lg bg-[#0084DA] px-4 py-1.5  flex items-center text-white lg:text-md transition hover:bg-[#ffc31e] focus:outline-none"
              >
                Blog
              </Link>
              <Link
                href={route("ΠοιοιΕίμαστε")}
                className="rounded-lg bg-[#43B756] px-4 py-1.5  flex items-center text-white lg:text-md transition hover:bg-[#308184] focus:outline-none"
              >
                Ποιοι είμαστε
              </Link>
              <Link
                href={route("Επικοινωνία")}
                className="rounded-lg bg-[#F4DD41] px-4 py-1.5  text-white lg:text-md transition hover:bg-[#fe7171] focus:outline-none flex items-center"
              >
                Επικοινωνία
              </Link>

              {auth.user ? (
                <Link
                  href={route("dashboard")}
                  aria-label="Dashboard"
                  className="text-gray-700 transition duration-150 ease-in-out transform hover:text-gray-900 active:scale-95"
                >
                  <i className="text-xl text-black fas fa-user" />
                </Link>
              ) : (
                <div className="relative flex  items-center gap-4 bg-[#b2f7ef] w-full justify-center px-3 xs:w-full  xs:py-4 md:py-2 rounded-lg ">
                  <span className="text-lg font-chewy text-[#1a659e]">
                    Λογαριασμός
                  </span>
                  <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="text-gray-700 transition duration-150 ease-in-out transform hover:text-gray-900 active:scale-95"
                  >
                    <i className="text-xl text-[#1a659e] fas fa-user transition transform duration-150 ease-in-out active:scale-95" />
                  </button>
                  {isMenuOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-30 flex justify-center gap-2 w-[100%] h-[100px] top-20 mx-auto bg-[#FEE4E3] rounded-lg shadow-xl">
                      {auth.user ? (
                        <div className="flex items-center justify-center">
                          <Link
                            href={route("dashboard")}
                            className="rounded-md px-2 py-1 bg-[#78BBC9] text-white transition hover:bg-[#FF2D20] "
                          >
                            Dashboard
                          </Link>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={route("login")}
                            className=" rounded-md  px-2 py-1 
                sm:px-2 sm:py-1 
                md:px-4 md:py-1 /
                text-white text-xl  
                  bg-[#58A8AB]  hover:bg-[#4E9F9D] "
                          >
                            Log in
                          </Link>
                          <Link
                            href={route("register")}
                            className="rounded-md bg-[#ffaaaa] 
               px-2 py-1 
                sm:px-2 sm:py-1 
                md:px-4 md:py-1 /
                text-white text-xl 
                
                ring-1 ring-transparent 
                transition hover:bg-[#FF2D20] focus:outline-none 
                dark:hover:text-white/80 dark:focus-visible:ring-white"
                          >
                            Register
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/*      <Link
                                href={route("Διαγωνισμός")}
                                className="rounded-lg bg-[#ef8030] px-4 py-1.5  text-white lg:text-md transition hover:bg-[#fe7171] focus:outline-none flex items-center"
                            >
                                Διαγωνισμός
                            </Link> */}
            </div>
          </PopoverGroup>
          <div className="absolute sm:left-16 xs:left-4 xs:w-[230px] sm:w-[260px] top-1 flex items-center justify-center w-[200px] h-full">
            <Link href="/" className="">
              <img
                src="/Images/Logo Mikroi Ma8htes NO Bg .png"
                alt="Mikroi Mathites Logo"
                className="z-[1050]  object-contain" // Set a fixed height for the logo
              />
            </Link>
          </div>

          {/*     <div className="hidden gap-3 lg:items-center lg:flex lg:justify-end">
                        <div className="flex items-center justify-end gap-2 p-2 mt-2 text-xl sm:gap-2 md:gap-4">
                            {/*      <a
                                href="https://youtube.com/@mikroimathites?si=O-22wIg2H9e8F60C"
                                target="_blank"
                                aria-label="YouTube"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#FF0000] rounded-full shadow-md hover:shadow-lg">
                                    <i className="text-white text-md fab fa-youtube"></i>
                                </div>
                            </a>
                            <a
                                href="https://www.tiktok.com/@mikroimathites?is_from_webapp=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#010101] rounded-full shadow-md hover:shadow-lg">
                                    <i className="text-black text-md fab fa-tiktok"></i>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61553477665097"
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#3b5998] rounded-full shadow-md hover:shadow-lg">
                                    <i className="text-white text-md fab fa-facebook"></i>
                                </div>
                            </a> 
                    </div> */}
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="relative z-[100] lg:hidden"
        >
          <div className="fixed inset-0 w-screen z-1 ">
            <DialogPanel
              transition
              className="w-full  z-1 mt-24 h-full   rounded-xl p-5 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 data-[closed]:w-0"
            >
              {/*       <button
                                onClick={() => setMobileMenuOpen(true)}
                                className={classNames(
                                    "tham tham-e-squeeze z-[1001] ml-auto tham-h-14 tham-w-10 pl-2",
                                    {
                                        "tham-active": mobileMenuOpen,
                                    }
                                )}
                                aria-label="Toggle menu"
                            >
                                <div className="tham-box">
                                    <div className="tham-inner" />
                                </div>
                            </button> */}

              <div className="z-10 flow-root mt-6 ">
                <div className="flex flex-col justify-between h-[70%] z-[8] xs:h-full md:h-[100%]  -my-6 divide-y divide-gray-500/10">
                  <div className="flex flex-col items-center justify-center gap-2 py-6 mt-12 space-y-2 sm:mx-auto mynerve md:w-2/3 h-1/3 xs:w-full xs:h-full xs:justify-start">
                    {/* <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-100 items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-gray-900 hover:bg-gray-50">
                                            Product
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                            />
                                        </DisclosureButton> */}
                    {/*    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map(
                                            (item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            )
                                        )}
                                    </Disclosure>
                                    </DisclosurePanel> */}
                    <Link
                      href="/"
                      className="block px-3 md:py-2 xs:py-4 text-center -mx-3 text-lg  leading-7  w-full text-white bg-[#9031cc] rounded-lg hover:bg-[#7a358a] transition transform duration-150 ease-in-out active:scale-95 "
                    >
                      Αρχική
                    </Link>
                    <Link
                      href={route("Δημιουργίες")}
                      className="block px-3 md:py-2 xs:py-4 text-center -mx-3 text-lg  leading-7 w-full text-white bg-[#49c92cfa] rounded-lg hover:bg-[#7a358a] transition transform  duration-150 ease-in-out active:scale-95"
                    >
                      Δημιουργίες
                    </Link>
                    <Link
                      href={route("video")}
                      className="block px-3 md:py-2 xs:py-4 text-center -mx-3 text-lg  leading-7  w-full text-white bg-[#ff595e] rounded-lg hover:bg-[#7e2c31] transition transform duration-150 ease-in-out active:scale-95"
                    >
                      Βίντεο
                    </Link>
                    {/*     <Link
                                        href={route("blog")}
                                        className="block px-8 md:w-2/3 xs:w-full xs:py-4 text-center md:py-2 -mx-3 text-lg  leading-7 text-white bg-[#ffca3a] rounded-lg hover:bg-[#f9df5e] transition transform duration-150 ease-in-out active:scale-95"
                                    >
                                        Blog
                                    </Link> */}
                    <Link
                      href={route("ΠοιοιΕίμαστε")}
                      className="block px-8 w-full xs:py-4 text-center md:py-2 -mx-3 text-lg  leading-7 text-white bg-[#ffca3a] rounded-lg hover:bg-[#f9df5e] transition transform duration-150 ease-in-out active:scale-95"
                    >
                      Ποιοι είμαστε
                    </Link>

                    <Link
                      href={route("Επικοινωνία")}
                      className="block  w-full xs:py-4
                                    px-8 md:py-2 -mx-3 text-lg text-center
                                    leading-7 text-white bg-[#f99a3a] rounded-lg
                                    hover:bg-[#5cadd0] transition transform
                                    duration-150 ease-in-out active:scale-95"
                    >
                      Επικοινωνία
                    </Link>
                    {/*  <Link
                                            href={route("Διαγωνισμός")}
                                            className="block px-3 w-full xs:w-full xs:py-4 md:py-2 -mx-3 text-lg text-center  leading-7 text-white bg-[#1982c4] rounded-lg hover:bg-[#ee5bc9] transition  transform duration-150 ease-in-out active:scale-95"
                                        >
                                            Διαγωνισμός
                                        </Link> */}
                    {auth.user ? (
                      <Link
                        href={route("dashboard")}
                        aria-label="Dashboard"
                        className="text-gray-700 transition duration-150 ease-in-out transform hover:text-gray-900 active:scale-95"
                      >
                        <i className="text-xl text-black fas fa-user" />
                      </Link>
                    ) : (
                      <div className="relative flex  items-center gap-4 bg-[#b2f7ef] w-full justify-center px-3 xs:w-full  xs:py-4 md:py-2 rounded-lg ">
                        <span className="text-lg font-chewy text-[#1a659e]">
                          Λογαριασμός
                        </span>
                        <button
                          onClick={() => setMenuOpen(!isMenuOpen)}
                          className="text-gray-700 transition duration-150 ease-in-out transform hover:text-gray-900 active:scale-95"
                        >
                          <i className="text-xl text-[#1a659e] fas fa-user transition transform duration-150 ease-in-out active:scale-95" />
                        </button>
                        {isMenuOpen && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-30 flex justify-center gap-2 w-[100%] h-[100px] top-20 mx-auto bg-[#FEE4E3] rounded-lg shadow-xl">
                            {auth.user ? (
                              <div className="flex items-center justify-center">
                                <Link
                                  href={route("dashboard")}
                                  className="rounded-md px-2 py-1 bg-[#78BBC9] text-white transition hover:bg-[#FF2D20] "
                                >
                                  Dashboard
                                </Link>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-2">
                                <Link
                                  href={route("login")}
                                  className=" rounded-md  px-2 py-1 
                sm:px-2 sm:py-1 
                md:px-4 md:py-1 /
                text-white text-xl  
                  bg-[#58A8AB]  hover:bg-[#4E9F9D] "
                                >
                                  Log in
                                </Link>
                                <Link
                                  href={route("register")}
                                  className="rounded-md bg-[#ffaaaa] 
               px-2 py-1 
                sm:px-2 sm:py-1 
                md:px-4 md:py-1 /
                text-white text-xl 
                
                ring-1 ring-transparent 
                transition hover:bg-[#FF2D20] focus:outline-none 
                dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                  Register
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {/* social media icons */}
                  <div className="flex justify-center flex-1 gap-3 ">
                    <div className="flex items-center justify-center w-full gap-2 p-2 mt-2 sm:gap-2 md:gap-4">
                      {/*        <Link
                                            href="https://instagram.com"
                                            target="_blank"
                                            aria-label="Instagram"
                                        >
                                            <i className="text-2xl text-pink-600 fab fa-instagram"></i>
                                        </Link> */}
                      <a
                        className="w-[35px] text-center"
                        href="https://www.facebook.com/profile.php?id=61553477665097"
                        target="_blank"
                        aria-label="Facebook"
                      >
                        <i className="w-full text-2xl text-blue-600 bg-white rounded-full fab fa-facebook"></i>
                      </a>
                      <a
                        className="w-[35px] text-center"
                        href="https://youtube.com/@mikroimathites?si=aICVMmqpYpCYDD-b"
                        target="_blank"
                        aria-label="YouTube"
                      >
                        <i className="w-full text-2xl text-red-600 bg-white rounded-full fab fa-youtube"></i>
                      </a>
                      <a
                        className="w-[35px] text-center"
                        href="https://www.tiktok.com/@mikroimathites?is_from_webapp=1"
                        target="_blank"
                        aria-label="TikTok"
                      >
                        <i className="w-full text-2xl text-black bg-white rounded-full fab fa-tiktok"></i>
                      </a>
                    </div>
                  </div>
                  {/* logo mobile */}
                  <div className="flex items-center max-w-[50%]  justify-center mx-auto ">
                    <Link
                      href="/"
                      className="flex items-center justify-center "
                    >
                      <img
                        src="/Images/Logo Mikroi Ma8htes NO Bg .png"
                        alt="Mikroi Mathites Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </header>
    </>
  );
}
