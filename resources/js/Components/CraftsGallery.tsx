import { Carousel, Typography } from "@material-tailwind/react";
import React from "react";

export interface Craft {
  image: string; // Image URL
  title: string; // Title of the craft
  location: string; // Location of the craft
}

interface CraftsGalleryProps {
  crafts: Craft[];
}

const CraftsGallery: React.FC<CraftsGalleryProps> = ({ crafts }) => {
  return (
    <div className="px-2 mx-auto sm:w-full md:w-2/4">
      <div className="my-6 text-center mynerve">
        <h2 className="text-2xl font-bold text-[#FF6B9C]">
          Χειροτεχνίες Μαθητών
        </h2>
        <p className="text-[#6ECFF6]">
          Μοιραστείτε μαζί μας τις δημιουργίες σας και κερδίστε δώρα!
        </p>
      </div>

      <Carousel
        {...({
          className: "rounded-xl",
          loop: true,
          autoplay: true,
          transition: { duration: 1 },
        } as any)}
      >
        {crafts.map((craft) => (
          <div
            key={craft.title}
            className="flex flex-col items-center justify-center w-full"
          >
            <img
              src={craft.image}
              alt={craft.title}
              className="object-cover w-full rounded-lg h-96"
            />
            <div className="w-full p-4 text-center bg-[#43B756]/90">
              <Typography
                {...({
                  children: craft.title,
                  variant: "h6",
                  color: "white",
                  className: "text-xl font-semibold mynerve",
                } as any)}
              >
                {craft.title} , <span className="">{craft.location}</span>
              </Typography>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CraftsGallery;
