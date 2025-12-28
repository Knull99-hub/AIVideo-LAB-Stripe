"use client";

import { motion } from "framer-motion";

const proofPoints = [
    "⚡ Fast turnaround",
    "🎯 Performance-focused creatives",
    "📱 Built for Meta/TikTok formats",
];

export default function TrustedBrands() {
    return (
        <section className="bg-[var(--off-white)]">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2>Trusted by Growing Brands</h2>
                </motion.div>

                {/* Logo Grid (Placeholders) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12 max-w-4xl mx-auto"
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="h-12 bg-gray-200 rounded-lg flex items-center justify-center"
                        >
                            <span className="text-gray-400 text-xs">Logo {i}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
                >
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {proofPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                className="text-center"
                            >
                                <span className="text-lg font-medium text-[var(--dark)]">
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
