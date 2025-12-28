"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    type?: "button" | "submit";
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    type = "button",
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2 
    px-6 py-3 rounded-full font-semibold 
    transition-all duration-300 cursor-pointer
  `;

    const variants = {
        primary: `
      bg-[var(--dark)] text-white
      hover:bg-[var(--purple)] hover:-translate-y-0.5
      active:translate-y-0
    `,
        secondary: `
      bg-[var(--purple)] text-white
      hover:bg-[var(--deep-blue)] hover:-translate-y-0.5
      active:translate-y-0
    `,
        outline: `
      bg-transparent border-2 border-[var(--dark)] text-[var(--dark)]
      hover:bg-[var(--dark)] hover:text-white hover:-translate-y-0.5
      active:translate-y-0
    `,
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

    // Arrow icon for primary buttons
    const ArrowIcon = () => (
        <span className="bg-[var(--purple)] group-hover:bg-[var(--dark)] p-1.5 rounded-full -ml-2 mr-1 transition-colors">
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </span>
    );

    const content = (
        <>
            {variant === "primary" && <ArrowIcon />}
            {children}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`group ${buttonClass}`}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={`group ${buttonClass}`}>
            {content}
        </button>
    );
}
