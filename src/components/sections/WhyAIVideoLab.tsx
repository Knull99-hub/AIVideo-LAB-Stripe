"use client";

import { motion } from "framer-motion";

export default function WhyAIVideoLab() {
    return (
        <section className="bg-white">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-[var(--peach)]/20 text-[var(--deep-blue)] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Our Story
                        </span>

                        <h2 className="mb-8">Why We Built AIVideo-LAB</h2>

                        <div className="text-left space-y-6 text-lg text-gray-700">
                            <p>
                                We noticed brands were stuck in a frustrating cycle:
                            </p>

                            <ul className="space-y-3 pl-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--purple)]">•</span>
                                    <span>Paying <strong>too much</strong> for creators</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--purple)]">•</span>
                                    <span>Waiting <strong>too long</strong> for content</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--purple)]">•</span>
                                    <span>Testing <strong>too few</strong> variations</span>
                                </li>
                            </ul>

                            <p>
                                So we built a system that <strong>generates, tests, and delivers</strong> UGC-style video ads at scale — without the creator bottleneck.
                            </p>

                            <p>
                                Today, AIVideo-LAB helps brands create high-converting video content in days, not weeks. With AI-powered avatars and optimized scripts, you get performance-focused creatives that actually move the needle.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
