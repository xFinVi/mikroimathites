import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

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
              <div className="hidden space-x-2 mynerve sm:-my-px sm:ms-10 sm:flex">
                <NavLink
                  href={route("dashboard")}
                  active={route().current("dashboard")}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  className="rounded-md mynerve px-4 py-1.5 flex items-center text-[#b15eec] lg:text-md transition hover:bg-[#9f51d6] font-bold focus:outline-none"
                  href={route("Αρχική")}
                  active={route().current("Αρχική")}
                >
                  Αρχική
                </NavLink>
                <NavLink
                  className="rounded-lg mynerve px-4 py-1.5  flex items-center text-[#e82828fa] lg:text-md transition hover:bg-[#ffc31e] focus:outline-none"
                  href={route("Δημιουργίες")}
                  active={route().current("Δημιουργίες")}
                >
                  Δημιουργίες
                </NavLink>
                <NavLink
                  className="rounded-lg mynerve px-4 py-1.5  flex items-center text-[#0084DA] lg:text-md transition hover:bg-[#ffc31e] focus:outline-none"
                  href={route("ΠοιοιΕίμαστε")}
                  active={route().current("ΠοιοιΕίμαστε")}
                >
                  Ποιοι είμαστε
                </NavLink>
                <NavLink
                  className="rounded-lg mynerve  px-4 py-1.5  text-[#54c22f] lg:text-md transition hover:bg-[#fe7171] focus:outline-none flex items-center"
                  href={route("Επικοινωνία")}
                  active={route().current("Επικοινωνία")}
                >
                  Επικοινωνία
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-gray-500"
                        >
                          <circle cx="12" cy="5" r="2" />
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="12" cy="19" r="2" />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                    <Dropdown.Link href={route("profile.edit")}>
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
                onClick={() => setShowingNavigationDropdown((prev) => !prev)}
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
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
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
            (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
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
                {user.data.name}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {user.data.email}
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
              <ResponsiveNavLink className="bg-[#ffca3a] text-white" href="/">
                Αρχική
              </ResponsiveNavLink>

              <ResponsiveNavLink
                className="bg-[#9e3bf5] text-white"
                href={route("Δημιουργίες")}
              >
                Δημιουργίες
              </ResponsiveNavLink>
              <ResponsiveNavLink
                className="bg-[#8ac926] text-white"
                href={route("ΠοιοιΕίμαστε")}
                as="button"
              >
                Ποιοι είμαστε
              </ResponsiveNavLink>
              <ResponsiveNavLink
                className="bg-[#1982c4] text-white"
                href={route("Επικοινωνία")}
                as="button"
              >
                Επικοινωνία
              </ResponsiveNavLink>
              {/* <ResponsiveNavLink
                className="bg-[#6a4c93] text-white"
                href={route("Διαγωνισμός")}
                as="button"
              >
                Διαγωνισμός
              </ResponsiveNavLink> */}
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
