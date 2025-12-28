"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PremiumCTA from "./ui/PremiumCTA";

const navLinks = [
    { href: "#how-it-works", label: "Products", hasDropdown: true },
    { href: "#pricing", label: "Use Cases", hasDropdown: true },
    { href: "#faq", label: "Resources", hasDropdown: true },
    { href: "#pricing", label: "Pricing" },
    { href: "/call", label: "Enterprise" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo - Left side, outside pill */}
                    <Link href="/" className="flex items-center gap-2 z-10 flex-shrink-0">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6h8l-4 6 4 6H4l4-6-4-6z" fill="white" />
                            <path d="M12 6h8l-4 6 4 6h-8l4-6-4-6z" fill="white" />
                        </svg>
                        <span className="font-semibold text-lg text-white tracking-tight whitespace-nowrap">
                            AIVideo-LAB
                        </span>
                    </Link>

                    {/* Center - Floating Glass Pill Container */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative flex items-center gap-1 rounded-full px-3 py-2"
                            style={{
                                background: scrolled
                                    ? "rgba(20, 10, 50, 0.85)"
                                    : "rgba(25, 15, 60, 0.6)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                boxShadow: `
                  0 4px 30px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                `,
                                transition: "background 0.3s ease",
                            }}
                        >
                            {/* Noise texture overlay */}
                            <div
                                className="absolute inset-0 rounded-full opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                                }}
                            />

                            {/* Nav Links */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href + link.label}
                                    href={link.href}
                                    className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#FFFFFF";
                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
                                        e.currentTarget.style.background = "transparent";
                                    }}
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                            ))}

                            {/* Divider */}
                            <div className="w-px h-5 bg-white/15 mx-1" />

                            {/* NEW Badge + Explore */}
                            <div className="flex items-center gap-2 px-2">
                                <span
                                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                                    style={{
                                        background: "var(--purple)",
                                        color: "white",
                                        boxShadow: "0 0 12px rgba(108, 71, 224, 0.4)",
                                    }}
                                >
                                    NEW
                                </span>
                                <Link
                                    href="#"
                                    className="text-sm font-medium transition-all duration-200"
                                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)"}
                                >
                                    Explore
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - CTAs outside pill */}
                    <div className="hidden md:flex items-center gap-6 flex-shrink-0">
                        <Link
                            href="/call"
                            className="text-sm font-medium tracking-widest transition-all duration-200 uppercase"
                            style={{ color: "rgba(255, 255, 255, 0.85)" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)"}
                        >
                            Book a Demo
                        </Link>
                        <PremiumCTA href="/start?plan=starter" size="sm">
                            CREATE
                        </PremiumCTA>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-white z-50"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={isOpen ? "open" : "closed"}
                            className="w-6 h-5 flex flex-col justify-between"
                        >
                            <motion.span
                                variants={{
                                    open: { rotate: 45, y: 8 },
                                    closed: { rotate: 0, y: 0 },
                                }}
                                className="w-full h-0.5 bg-white origin-left"
                            />
                            <motion.span
                                variants={{
                                    open: { opacity: 0 },
                                    closed: { opacity: 1 },
                                }}
                                className="w-full h-0.5 bg-white"
                            />
                            <motion.span
                                variants={{
                                    open: { rotate: -45, y: -8 },
                                    closed: { rotate: 0, y: 0 },
                                }}
                                className="w-full h-0.5 bg-white origin-left"
                            />
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden mt-4 mx-4 rounded-2xl overflow-hidden"
                        style={{
                            background: "rgba(20, 10, 50, 0.95)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <div className="p-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-medium py-3 px-4 rounded-lg transition-all duration-200"
                                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
                                <Link
                                    href="/call"
                                    className="text-center py-3 font-medium tracking-wide uppercase"
                                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    href="/start?plan=starter"
                                    className="flex items-center justify-center gap-2.5 bg-black text-white px-5 py-3.5 rounded-xl font-semibold"
                                    style={{
                                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                                    }}
                                >
                                    <span
                                        className="flex items-center justify-center w-7 h-7 rounded-md"
                                        style={{ background: "var(--purple)" }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    CREATE
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
