"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden gradient-hero flex flex-col items-center justify-center pt-20 pb-12 text-white">
            <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">

                {/* Animated Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight max-w-5xl mb-6"
                >
                    AI Video Solutions <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                        that Inspire
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-light"
                >
                    Create stunning, high-converting video ads from any URL in minutes.
                    No production skills required.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-4"
                >
                    <Button className="w-64 transform scale-110">Start for Free</Button>
                    <span className="text-xs md:text-sm text-white/70 font-medium">
                        No credit card required / Rated 4.8/5
                    </span>
                </motion.div>

                {/* Carousel Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 w-full max-w-7xl"
                >
                    <div className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar snap-x">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex-shrink-0 w-64 h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300 flex items-center justify-center snap-center">
                                <span className="text-white/50 font-bold">Video Sample {i}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        </section>
    );
};
