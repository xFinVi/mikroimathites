import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div
            className="relative  w-full flex flex-col justify-center items-center min-h-screen pt-6 bg-[#FEE4E3] sm:justify-center sm:pt-0 "
            style={{
                backgroundImage: `url('images/paintbg.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-[#5a189a] -mt-12 rounded-lg mx-auto  w-5/6 h-full">
                {/* Logo Wrapper Positioned Absolutely */}
                <div className="relative z-20 -mb-12 h-aut0">
                    <Link href="/" className="block w-full h-full">
                        <ApplicationLogo width="450px" height="auto" />
                    </Link>
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full px-6 py-10 bg-[#5a189a] shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
