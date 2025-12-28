"use client";

import { motion } from "framer-motion";

const steps = [
    {
        icon: "📦",
        title: "Send Your Product",
        description: "Share your product page, offer details, and target audience.",
    },
    {
        icon: "✍️",
        title: "We Craft Scripts",
        description: "Our team creates UGC scripts with hooks that convert.",
    },
    {
        icon: "🎬",
        title: "AI Generates Ads",
        description: "AI avatars bring your scripts to life with natural delivery.",
    },
    {
        icon: "🚀",
        title: "Receive Your Ads",
        description: "Get platform-ready videos in 48-72h (Growth/Premium).",
    },
];

const whatWeNeed = [
    "Product page link",
    "3 competitor ads you like",
    "Your offer + target customer",
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-[var(--off-white)]">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-[var(--purple)]/10 text-[var(--purple)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Simple Process
                    </span>
                    <h2>How AIVideo-LAB Works</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        From your product to ready-to-run ads in 4 simple steps.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="card card-hover text-center h-full">
                                {/* Step number */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[var(--purple)] text-white rounded-full text-xs flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="text-4xl mb-4 mt-2">{step.icon}</div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>

                            {/* Connector arrow (not on last) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[var(--purple)] z-10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* What we need */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[var(--deep-blue)] rounded-2xl p-8 text-center"
                >
                    <h3 className="text-white text-xl font-bold mb-4">
                        What We Need From You
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {whatWeNeed.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm"
                            >
                                ✓ {item}
                            </div>
                        ))}
                    </div>
                    <p className="text-white/60 text-sm mt-4">That&apos;s it. We handle the rest.</p>
                </motion.div>
            </div>
        </section>
    );
}
