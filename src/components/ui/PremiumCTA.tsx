"use client";

import Link from "next/link";

interface PremiumCTAProps {
    href: string;
    children: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function PremiumCTA({ href, children, size = "md", className = "" }: PremiumCTAProps) {
    const sizeStyles = {
        sm: {
            container: "w-40 h-11 rounded-xl",
            slider: "h-9 w-9 rounded-lg top-[4px] left-1 group-hover:w-[152px]",
            arrow: "w-5 h-5",
            text: "text-sm translate-x-3",
        },
        md: {
            container: "w-48 h-14 rounded-2xl",
            slider: "h-12 w-12 rounded-xl top-[4px] left-1 group-hover:w-[184px]",
            arrow: "w-6 h-6",
            text: "text-base translate-x-4",
        },
        lg: {
            container: "w-64 h-16 rounded-2xl",
            slider: "h-14 w-14 rounded-xl top-[4px] left-1 group-hover:w-[248px]",
            arrow: "w-7 h-7",
            text: "text-lg translate-x-5",
        },
    };

    const s = sizeStyles[size];

    return (
        <Link href={href} className={className}>
            <button
                className={`bg-black text-center ${s.container} relative text-white font-semibold group cursor-pointer`}
                type="button"
                style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                }}
            >
                {/* Sliding purple segment - from left to right */}
                <div
                    className={`bg-[var(--purple)] ${s.slider} flex items-center justify-center absolute z-10 duration-500 ease-out`}
                >
                    {/* Arrow pointing RIGHT */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        className={`${s.arrow} transition-transform duration-300 group-hover:translate-x-1`}
                    >
                        <path
                            d="M800 480H160a32 32 0 1 0 0 64h640a32 32 0 0 0 0-64z"
                            fill="#FFFFFF"
                        />
                        <path
                            d="m786.752 512-265.408-265.344a32 32 0 0 1 45.312-45.312l288 288a32 32 0 0 1 0 45.312l-288 288a32 32 0 1 1-45.312-45.312L786.752 512z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </div>
                <p className={`${s.text} tracking-wider`}>{children}</p>
            </button>
        </Link>
    );
}
