import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    // Get user information from Inertia.js props
    const user = usePage().props.auth.user;

    // State to manage the visibility of the navigation dropdown on smaller screens
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "local",
                backgroundImage: `url('Images/paintbg.jpg')`, // Background image for the main container
            }}
        >
            {/* Navigation bar */}
            <nav className="bg-white border-b border-gray-100">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo and primary navigation links */}
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        {/* User profile dropdown (visible on larger screens) */}
                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}
                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Προφίλ
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Αποσύνδεση
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Hamburger menu for smaller screens */}
                        <div className="flex items-center -me-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (prev) => !prev
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {/* Icon toggles between hamburger and close */}
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dropdown menu for smaller screens */}
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>
                        {/* Navigation links */}
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                className="bg-[#ff723a] text-white"
                                href={route("profile.edit")}
                            >
                                Προφίλ
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                className="bg-[#ffca3a] text-white"
                                href="/"
                            >
                                Αρχική
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                className="bg-[#8ac926] text-white"
                                href={route("about")}
                                as="button"
                            >
                                Ποιοι είμαστε
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                className="bg-[#1982c4] text-white"
                                href={route("contact")}
                                as="button"
                            >
                                Επικοινωνία
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                className="bg-[#6a4c93] text-white"
                                href={route("competition")}
                                as="button"
                            >
                                Διαγωνισμός
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                className="bg-[#f32c2c] text-white font-bold"
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Αποσύνδεση
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page header */}
            {header && (
                <header className="bg-[f3f3f3] shadow">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-[#ffb879]/90">
                        {header}
                    </div>
                </header>
            )}

            {/* Main content */}
            <main>{children}</main>
        </div>
    );
}
