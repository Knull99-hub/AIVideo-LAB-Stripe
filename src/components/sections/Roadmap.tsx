"use client";

import { motion } from "framer-motion";

const roadmapItems = [
    {
        icon: "👤",
        title: "Custom Brand Avatars",
        description: "Train avatars that match your brand identity",
        status: "Coming Q1",
    },
    {
        icon: "🌍",
        title: "Multi-Language Ads",
        description: "Generate ads in 10+ languages",
        status: "Coming Q1",
    },
    {
        icon: "📊",
        title: "Hook Performance Scoring",
        description: "AI-powered hook optimization",
        status: "Coming Q2",
    },
    {
        icon: "🔄",
        title: "AI Ad Iteration Loops",
        description: "Automated A/B variant generation",
        status: "Coming Q2",
    },
];

export default function Roadmap() {
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
                        What&apos;s Next
                    </span>
                    <h2>On Our Roadmap</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        We&apos;re constantly improving. Here&apos;s what&apos;s coming.
                    </p>
                </motion.div>

                {/* Roadmap Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 border border-gray-100"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                            <span className="inline-block bg-[var(--peach)]/20 text-[var(--deep-blue)] px-2 py-1 rounded text-xs font-medium">
                                {item.status}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
