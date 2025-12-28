"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

export const Button = ({ className, variant = "primary", children, ...props }: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "group flex items-center justify-between rounded-md text-sm font-medium transition-colors",
                "h-12 px-1 py-1", // Container padding for the inner structure
                variant === "primary" ? "bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 border border-neutral-900" : "bg-white text-neutral-900 border border-neutral-200 hover:border-primary",
                className
            )}
            {...props}
        >
            <span className={cn(
                "flex h-10 w-10 items-center justify-center rounded-sm transition-colors",
                variant === "primary" ? "bg-primary text-white group-hover:bg-neutral-900" : "bg-neutral-100 text-neutral-900"
            )}>
                <ArrowRight className="h-5 w-5" />
            </span>
            <span className="px-6 font-bold tracking-wide">{children}</span>
        </motion.button>
    );
};
