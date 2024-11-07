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
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    UserCircleIcon,
} from "@heroicons/react/20/solid";

import { Link } from "@inertiajs/react";

const products = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Security",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

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
        <header
            className={`fixed top-0 w-full p-1 ${
                mobileMenuOpen ? "animate-bg-transition" : "bg-white"
            } shadow-xl z-[1021] transition-transform duration-300`}
        >
            <nav
                aria-label="Global"
                className="flex items-center justify-between w-full h-[100px] lg:px-2"
            >
                <div className="flex flex-1  lg:hidden z-[102]">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className={classNames(
                            "tham tham-e-squeeze z-[1001] tham-h-8 tham-w-6 pl-4",
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
                <PopoverGroup className="hidden mr-20 lg:flex lg:gap-x-2 ">
                    {/*    <Popover className="relative">
                        <PopoverButton
                            className="flex rounded-md bg-[#E04B3B] hover:bg-[#c53f30]   px-2 py-1 
        sm:px-3 sm:py-2 
        md:px-4 md:py-1 items-center text-sm  leading-6 text-white gap-x-1"
                        >
                            Blogs / Ideas
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="flex-none w-5 h-5 text-gray-400"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                    >
                                        <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                            <item.icon
                                                aria-hidden="true"
                                                className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                href={item.href}
                                                className="block text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm  leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className="flex-none w-5 h-5 text-gray-400"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover> */}

                    {/*       <Link
                        href={route("video")}
                        className="rounded-md bg-[#347ABA] 
        px-2 py-1 
        sm:px-3 sm:py-2 
        md:px-4 md:py-1 / flex items-center
        text-white text-sm md:text-md
        ring-1 ring-transparent 
        transition hover:bg-[#ffc31e] focus:outline-none 
        dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Βίντεο
                    </Link> */}
                    <a
                        href="/"
                        className="rounded-md bg-[#7d34b2] 
        px-2 py-0.5 flex items-center
        text-white lg:text-md
        
        transition hover:bg-[#9f51d6] focus:outline-none 
      "
                    >
                        Αρχική
                    </a>
                    <Link
                        href={route("blog")}
                        className="rounded-md bg-[#f27446] 
        px-2 py-0.5 flex items-center
        text-white lg:text-md
        
        transition hover:bg-[#ffc31e] focus:outline-none 
      "
                    >
                        Blog
                    </Link>

                    <Link
                        href={route("about")}
                        className="rounded-md bg-[#0084DA] 
         px-2 py-0.5 flex items-center
        text-white lg:text-md
        transition hover:bg-[#308184] focus:outline-none 
        "
                    >
                        Ποιοι είμαστε
                    </Link>

                    <Link
                        href={route("contact")}
                        className="rounded-md bg-[#F4DD41] 
          px-2 py-0.5 
        text-white lg:text-md
        transition hover:bg-[#fe7171] focus:outline-none  flex items-center
        "
                    >
                        Επικοινωνία
                    </Link>
                    <Link
                        href={route("competition")}
                        className="rounded-md bg-[#38CD5C] 
         px-2 py-0.5 
        text-white lg:text-md
        transition hover:bg-[#fe7171] focus:outline-none  flex items-center
       "
                    >
                        Διαγωνισμός
                    </Link>
                </PopoverGroup>

                {/*  <div className="flex flex-col items-center justify-center ">
                    
                     <Link
                        href={route("contact")}
                        className="rounded-md w-2/3 text-center
        px-2 py-1 
        sm:px-3 sm:py-2 
        md:px-4 md:py-1 /
        text-white text-sm md:text-md
        bg-[#fe7171]
        ring-1 ring-transparent 
        transition hover:bg-[#fe7171] focus:outline-none justify-center flex items-center
        dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Επικοινωνία
                    </Link> 
                </div> */}
                <div className="hidden gap-3 lg:items-center lg:flex lg:justify-end">
                    <div className="flex items-center justify-end gap-2 p-2 mt-2 text-xl sm:gap-2 md:gap-4">
                        {/*   <a
                            href="https://instagram.com"
                            target="_blank"
                            aria-label="Instagram"
                            rel="noopener noreferrer"
                        >
                            <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#C13584] rounded-full shadow-md hover:shadow-lg">
                                <i className="text-white text-md fab fa-instagram"></i>
                            </div>
                        </a> */}

                        <a
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
                            <div className="flex items-center justify-center p-2 transition-shadow duration-300 bg-[#FFD44E] rounded-full shadow-md hover:shadow-lg">
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
                        <div className="relative items-center hidden sm:flex">
                            <button
                                onClick={() => setMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <i className="text-xl text-black fas fa-user" />
                            </button>

                            {isMenuOpen && (
                                <div className="absolute -right-8 z-30 flex justify-center gap-2 w-[200px] h-[100px] mt-40 bg-[#eeecff] rounded-lg shadow-lg items-center">
                                    {auth.user ? (
                                        <Link
                                            href={route("dashboard")}
                                            className="p-2  text-[#ffff] font-bold flex justify-center text-xl items-center bg-[#FFAAAA] transition rounded-md h-1/2 w-full"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <Link
                                                href={route("login")}
                                                className="rounded-md px-2 py-1 
                                    sm:px-2 sm:py-1 
                                    md:px-4 md:py-1 
                                    text-white text-sm  
                                    bg-[#58A8AB]  hover:bg-[#4E9F9D]"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="rounded-md bg-[#ffaaaa] 
                                    px-2 py-1 
                                    sm:px-2 sm:py-1 
                                    md:px-4 md:py-1 
                                    text-white text-sm 
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
                    </div>
                </div>
                <div className="absolute top-10px sm:-top-[25px] transform  lg:-translate-x-1/2 -translate-x-1/2 left-1/2 lg:-top-[10px]">
                    <Link
                        href="/"
                        className="flex items-center justify-center z-[9999]  xs:w-[250px] sm:w-[350px] md:w-[350px] lg:w-[250px] "
                    >
                        <img
                            src="Images/Logo Mikroi Ma8htes NO Bg .png "
                            alt="Mikroi Mathites Logo"
                            className="max-h-[170px] z-[1050]" // Adjust the height as needed
                        />
                    </Link>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className="relative z-[100] lg:hidden"
            >
                <div className="fixed inset-0 z-10 w-screen ">
                    <DialogPanel
                        transition
                        className="w-full h-[100%] -z-[10]    rounded-xl p-5 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 data-[closed]:w-0"
                    >
                        {/* Button to close the dialog */}
                        <button
                            onClick={() => setMobileMenuOpen(!true)}
                            className={classNames(
                                "tham tham-e-squeeze  tham-w-6 mt-6 ",
                                {
                                    "tham-active": mobileMenuOpen,
                                }
                            )}
                            aria-label="Toggle menu"
                        >
                            {/*   <div className="tham-box">
                                <div className="tham-inner" />
                            </div> */}
                        </button>

                        <div className="flow-root mt-6 z-[200] ">
                            <div className="flex flex-col justify-between h-[80%] z-[890] xs:h-full md:h-[100%]  -my-6 divide-y divide-gray-500/10">
                                <div className="flex flex-col items-center justify-center gap-2 py-6 mx-auto mt-12 space-y-2 md:w-2/3 h-1/3 xs:w-full xs:h-full mynerve xs:justify-start">
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
                                    <a
                                        href="/"
                                        className="block px-3 md:py-2 xs:py-4 text-center -mx-3 text-lg  leading-7 md:w-2/3 xs:w-full text-white bg-[#9031cc] rounded-lg hover:bg-[#7a358a] transition transform duration-150 ease-in-out active:scale-95"
                                    >
                                        Αρχική
                                    </a>
                                    <Link
                                        href={route("video")}
                                        className="block px-3 md:py-2 xs:py-4 text-center -mx-3 text-lg  leading-7 md:w-2/3 xs:w-full text-white bg-[#ff595e] rounded-lg hover:bg-[#7e2c31] transition transform duration-150 ease-in-out active:scale-95"
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
                                        href={route("about")}
                                        className="block px-8 md:w-2/3 xs:w-full xs:py-4 text-center md:py-2 -mx-3 text-lg  leading-7 text-white bg-[#ffca3a] rounded-lg hover:bg-[#f9df5e] transition transform duration-150 ease-in-out active:scale-95"
                                    >
                                        Ποιοι είμαστε
                                    </Link>

                                    <Link
                                        href={route("contact")}
                                        className="block md:w-2/3 xs:w-full xs:py-4
                                    px-8 md:py-2 -mx-3 text-lg text-center
                                    leading-7 text-white bg-[#8ac926] rounded-lg
                                    hover:bg-[#5cadd0] transition transform
                                    duration-150 ease-in-out active:scale-95"
                                    >
                                        Επικοινωνία
                                    </Link>
                                    <Link
                                        href={route("competition")}
                                        className="block px-3 md:w-2/3 xs:w-full xs:py-4 md:py-2 -mx-3 text-lg text-center  leading-7 text-white bg-[#1982c4] rounded-lg hover:bg-[#ee5bc9] transition  transform duration-150 ease-in-out active:scale-95"
                                    >
                                        Διαγωνισμός
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
                                        <div className="relative flex  items-center gap-4 bg-[#b2f7ef] w-full justify-center px-3 md:w-2/3 xs:w-full xs:py-4 md:py-2 rounded-lg ">
                                            <span className="text-lg font-chewy text-[#1a659e]">
                                                Λογαριασμός
                                            </span>
                                            <button
                                                onClick={() =>
                                                    setMenuOpen(!isMenuOpen)
                                                }
                                                className="text-gray-700 transition duration-150 ease-in-out transform hover:text-gray-900 active:scale-95"
                                            >
                                                <i className="text-xl text-[#1a659e] fas fa-user transition transform duration-150 ease-in-out active:scale-95" />
                                            </button>
                                            {isMenuOpen && (
                                                <div className="absolute left-1/2 transform -translate-x-1/2 z-30 flex justify-center gap-2 w-[100%] h-[100px] top-20 mx-auto bg-[#FEE4E3] rounded-lg shadow-xl">
                                                    {auth.user ? (
                                                        <div className="flex items-center justify-center">
                                                            <Link
                                                                href={route(
                                                                    "dashboard"
                                                                )}
                                                                className="rounded-md px-2 py-1 bg-[#78BBC9] text-white transition hover:bg-[#FF2D20] "
                                                            >
                                                                Dashboard
                                                            </Link>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Link
                                                                href={route(
                                                                    "login"
                                                                )}
                                                                className=" rounded-md  px-2 py-1 
                sm:px-2 sm:py-1 
                md:px-4 md:py-1 /
                text-white text-xl  
                  bg-[#58A8AB]  hover:bg-[#4E9F9D] "
                                                            >
                                                                Log in
                                                            </Link>
                                                            <Link
                                                                href={route(
                                                                    "register"
                                                                )}
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
    );
}
