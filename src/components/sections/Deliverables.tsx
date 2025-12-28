"use client";

import { motion } from "framer-motion";

const deliverables = [
    {
        icon: "✍️",
        title: "Scripts + Hooks",
        description: "Multiple hook variations per concept",
    },
    {
        icon: "🎭",
        title: "AI Avatar + Voice",
        description: "Natural UGC-style delivery with captions",
    },
    {
        icon: "📱",
        title: "9:16 Platform-Ready",
        description: "Formatted for TikTok, Reels, Shorts",
    },
    {
        icon: "🔄",
        title: "1 Revision Round",
        description: "Hook/pacing/captions/CTA changes (not concept)",
    },
    {
        icon: "📦",
        title: "Source Files",
        description: "Download and use anywhere",
    },
    {
        icon: "⚡",
        title: "Delivery Time",
        description: "3-5 days (Starter) / 48-72h (Growth/Premium)",
    },
];

export default function Deliverables() {
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
                    <span className="inline-block bg-[var(--purple)]/10 text-[var(--purple)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        What&apos;s Included
                    </span>
                    <h2>What You Get</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        Every plan includes these core deliverables.
                    </p>
                </motion.div>

                {/* Deliverables Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Revision note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8"
                >
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                        <strong>Note on revisions:</strong> 1 revision round covers changes to hook, voice pacing, captions, or CTA — not full concept changes. Want more flexibility? Book a strategy call.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
