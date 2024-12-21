import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `flex items-center justify-center rounded-md bg-[#4361ee] px-4 py-2 text-xs font-bold  tracking-widest text-[#fff] transition duration-150 ease-in-out  ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
