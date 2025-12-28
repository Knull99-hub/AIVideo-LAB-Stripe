"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function StrategyCall() {
    return (
        <section id="strategy-call" className="gradient-hero py-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left - Content */}
                        <div>
                            <span className="inline-block bg-[var(--purple)]/10 text-[var(--purple)] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                Limited Spots
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Book a Free Strategy Call
                            </h3>
                            <p className="text-gray-600 mb-6">
                                We take <strong>10 brands per week</strong>. Get personalized advice on your video ad strategy.
                            </p>

                            <ul className="space-y-3 mb-6">
                                {[
                                    "Brand & offer audit",
                                    "Custom hook ideas",
                                    "Clear next steps",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button href="/call" variant="primary">
                                Book Your Call
                            </Button>
                        </div>

                        {/* Right - Calendar Placeholder */}
                        <div className="bg-[var(--off-white)] rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-[var(--purple)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-[var(--purple)]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-sm">
                                Calendar will be embedded on the /call page
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
