"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TOOLS = [
    { label: "AI Avatars", color: "from-purple-500 to-indigo-500" },
    { label: "Video Ads", color: "from-blue-500 to-cyan-500" },
    { label: "Shorts Gen", color: "from-teal-500 to-emerald-500" },
    { label: "Batch Process", color: "from-orange-500 to-amber-500" },
    { label: "Voice Cloning", color: "from-pink-500 to-rose-500" },
    { label: "Script Writer", color: "from-red-500 to-orange-500" }
];

export const ToolkitCarousel = () => {
    return (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Complete Creative Toolkit</h2>
                <p className="text-neutral-400 max-w-xl">Everything you need to scale your video production in one place.</p>
            </div>

            {/* Slider */}
            <div className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-[calc(50vw-600px)] snap-x hide-scrollbar scroll-smooth">
                {TOOLS.map((tool, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="snap-start flex-shrink-0 w-80 h-96 rounded-3xl bg-neutral-800 border border-neutral-700 relative overflow-hidden group cursor-pointer"
                    >
                        {/* Background Gradient */}
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity", tool.color)} />

                        {/* Content */}
                        <div className="absolute bottom-6 left-6 z-10">
                            <h3 className="text-2xl font-bold">{tool.label}</h3>
                        </div>

                        {/* Visual placeholder */}
                        <div className="absolute inset-4 rounded-2xl bg-neutral-900/50 border border-white/5 flex items-center justify-center">
                            <div className={cn("w-20 h-20 rounded-full bg-gradient-to-br blur-xl opacity-50", tool.color)} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
