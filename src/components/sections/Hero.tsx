"use client";

import { motion } from "framer-motion";
import PremiumCTA from "../ui/PremiumCTA";

export default function Hero() {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: "url('/hero-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
        >
            {/* Noise texture overlay for premium feel */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette overlay for cinematic feel */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
                }}
            />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center flex-1">
                <div className="max-w-5xl mx-auto text-center pt-24">
                    {/* Main Headline - Pure White, Heavy Weight */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 tracking-tight"
                        style={{
                            fontSize: "clamp(4rem, 12vw, 8rem)",
                            fontStyle: "italic",
                            fontWeight: 300,
                            lineHeight: 1.1,
                            color: "#FFFFFF",
                            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                        }}
                    >
                        AI Ads that win.
                    </motion.h1>

                    {/* Sub-headline - Soft white */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="text-xl md:text-2xl mb-3 font-light"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                        Winning video ads, made and tested for you.
                    </motion.p>

                    {/* Helper text - Even lighter */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                        className="text-lg mb-10"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                        (yes, it&apos;s really that simple)
                    </motion.p>

                    {/* CTA Button - Premium Creatify-style animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                        className="flex justify-center mb-6"
                    >
                        <PremiumCTA href="/start?plan=starter" size="lg">
                            START FOR FREE
                        </PremiumCTA>
                    </motion.div>

                    {/* Trust indicators - Light hierarchy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-6 text-sm"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            No credit card required
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span>Rated 4.8/5 on G2</span>
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Video previews - positioned at bottom */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="relative z-10 flex justify-center gap-4 overflow-x-auto pb-8 px-6"
            >
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="flex-shrink-0 w-32 md:w-40 aspect-[9/16] rounded-2xl backdrop-blur-md flex items-center justify-center cursor-pointer"
                        style={{
                            background: "linear-gradient(135deg, rgba(108,71,224,0.2) 0%, rgba(108,71,224,0.1) 100%)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                        }}
                    >
                        <div className="text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                            <svg
                                className="w-10 h-10 mx-auto mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-xs">Sample {i}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
