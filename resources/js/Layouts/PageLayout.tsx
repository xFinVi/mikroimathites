import React from "react";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { PageProps } from "@/types";

interface LayoutProps extends PageProps {
  children: React.ReactNode; // Define children as ReactNode
  pageTitle: string;
}

const PageLayout: React.FC<LayoutProps> = ({
  auth,
  children,
  pageTitle,
  bgColorClass = "bg-[#f3f3f3]",
}) => {
  return (
    <>
      <Navigation auth={auth} />
      {pageTitle && (
        <div
          className={`h-full text-center flex items-center justify-center pb-8 text-3xl font-bold pt-36 mynerve relative z-10 ${bgColorClass}`}
        >
          <h1 className="text-white">{pageTitle}</h1>
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
