import { ImgHTMLAttributes } from "react";

interface ApplicationLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    // Add any additional props you want here
}

export default function ApplicationLogo({
    className = "", // Use an empty string for no default class
    width = "300px",
    height = "auto",
    ...props
}: ApplicationLogoProps) {
    return (
        <img
            {...props}
            className={className} // Apply the className directly
            src="/Images/Logo Mikroi Ma8htes NO Bg .png"
            alt="Mikroi Mathites Logo"
            width={width}
            height={height}
        />
    );
}
