"use client";

import { motion } from "framer-motion";

const proofItems = [
    "⚡ Fast turnaround",
    "📹 Performance creatives",
    "🌍 Global delivery",
];

export default function ProofBar() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--dark)] py-4"
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {proofItems.map((item, index) => (
                        <span
                            key={index}
                            className="text-white/80 text-sm font-medium"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
