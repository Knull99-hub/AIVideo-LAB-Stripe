"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const Results = () => {
    return (
        <section className="py-24 bg-secondary-peach/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Abstract 3D shape representation */}
                        <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-secondary-peach/20 border border-white/50">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                                <div className="w-48 h-48 bg-secondary-blue/20 rounded-full blur-3xl absolute top-10 right-10" />
                            </div>
                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 left-10 bg-white p-4 rounded-xl shadow-lg border border-neutral-100/50"
                            >
                                <span className="text-4xl font-bold text-primary">High Conv.</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 right-10 bg-white p-4 rounded-xl shadow-lg border border-neutral-100/50"
                            >
                                <span className="text-4xl font-bold text-secondary-peach">3.5x ROAS</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Metrics */}
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Real Results</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-secondary-blue mb-10">
                            Performance that scales with you.
                        </h2>

                        <div className="space-y-8">
                            {[
                                { value: "2.5x", label: "Increased Engagement", desc: "Compared to static image ads" },
                                { value: "90%", label: "Reduction in Production Time", desc: "From days to minutes" },
                                { value: "40%", label: "Lower Cost Per Acquisition", desc: "Optimized creative testing" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="mt-2">
                                        <CheckCircle className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold text-neutral-900 mb-1">{item.value}</h3>
                                        <p className="text-lg font-bold text-neutral-700">{item.label}</p>
                                        <p className="text-neutral-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
