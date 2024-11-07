import React, { useState } from "react";

export default function Hero() {
    // State for balloon position based on mouse movement
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handler to update mouse position
    const handleMouseMove = (e: React.MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        // Calculate relative movement: we want balloons to move opposite to the mouse position
        setMousePosition({
            x: (e.clientX - innerWidth / 2) / innerWidth,
            y: (e.clientY - innerHeight / 2) / innerHeight,
        });
    };

    return (
        <div
            className="relative flex flex-col lg:flex-row   py-36 mt-20 items-center justify-center  h-[90vh] bg-cover bg-center bg-[#82CBFA]"
            style={{
                backgroundImage: `url('images/bluebg.png')`,
            }}
            onMouseMove={handleMouseMove}
        >
            {/* Text Content */}

            <div className="z-30 flex flex-col items-center justify-center flex-1 w-full gap-4 text-center p-6font-bold top-1/2 lg:w-2/5 rounded-3xl font-chewy">
                <h1 className="text-4xl sm:text-7xl md:text-6xl lg:text-7xl font-bold text-[#26536e]">
                    Γειά σας φίλοι μου
                </h1>
                <p className="text-xl sm:text-2xl md:text-2xl text-[#26536e] font-semibold px-8 lg:px-0 max-w-[100%] lg:w-2/3  text-center flex justify-center sm:w-full sm:px-2  lg:text-3xl w-full">
                    Καλωσορίσατε στους Μικρούς μαθητές! Ετοιμαστείτε για έναν
                    κόσμο γεμάτο παιχνίδι, χαρά και δημιουργικότητα.
                </p>
            </div>
            <div className="z-40 flex-1 ">
                {/* Background Stars */}
                <img
                    src="Images/VictoriaYellow.png"
                    className="h-full  w-[300px] xs:w-[400px]  md:w-[600px]"
                    alt="Background Stars"
                />

                <script async src="https://www.tiktok.com/embed.js"></script>
            </div>

            {/* Balloons (parallax effect based on mouse movement) */}
            <div
                className="absolute  mx-auto max-w-[100%] xs:w-full h-full pointer-events-none"
                style={{
                    transform: `translate(${mousePosition.x * -20}px, ${
                        mousePosition.y * -20
                    }px)`,
                    transition: "transform 0.1s ease-out",
                }}
            >
                <img
                    src="Images/stars-hero.png"
                    className=" top-[170px]  w-full h-full  object-cover transform  left-1/2  xs:left-0"
                    alt="Balloons"
                />
            </div>

            {/* Main Character (Victoria) */}
            {/*  <div
                className="relative z-20 flex items-center justify-center w-[100%] md:w-full lg:w-2/3"
                style={{
                    transform: `translate(${mousePosition.x * +20}px, ${
                        mousePosition.y * +20
                    }px)`,
                    transition: "transform 0.1s ease-out",
                }}
            >
                <img
                    src="/Images/baloon.png"
                    className="h-auto max-w-full"
                    alt="Main Character Victoria"
                />
            </div> */}
        </div>
    );
}
