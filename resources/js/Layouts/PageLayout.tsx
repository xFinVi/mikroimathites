import React from "react";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { PageProps } from "@/types";
import ReactCookieBot from "react-cookiebot";

interface LayoutProps extends PageProps {
    children: React.ReactNode; // Define children as ReactNode
}

const PageLayout: React.FC<LayoutProps> = ({ auth, children }) => {
    return (
        <>
            <Navigation auth={auth} />
            <main>{children}</main> {/* This renders the child content */}
            <Footer />
        </>
    );
};

export default PageLayout;
