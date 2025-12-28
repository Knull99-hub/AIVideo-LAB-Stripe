"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "Do I own the videos?",
        answer: "Yes, you get full commercial rights. Use them on any platform — TikTok, Meta, YouTube, your website, wherever you need.",
    },
    {
        question: "Can you match my brand tone?",
        answer: "Absolutely. We ask for brand references during onboarding and tailor the script tone, avatar selection, and pacing to match your brand.",
    },
    {
        question: "How many revisions do I get?",
        answer: "1 revision round is included. This covers hook, pacing, captions, and CTA changes — not full concept changes. Need more flexibility? Book a strategy call.",
    },
    {
        question: "What if I don't like the result?",
        answer: "We'll revise until it matches the agreed brief. Refunds apply only if deliverables aren't delivered as agreed.",
    },
    {
        question: "What platforms do these work for?",
        answer: "All videos are formatted for TikTok, Instagram Reels, and YouTube Shorts (9:16 vertical). Perfect for paid ads or organic content.",
    },
    {
        question: "How fast is delivery?",
        answer: "Starter: 3-5 days. Growth & Premium: 48-72 hours. We prioritize premium orders for fastest turnaround.",
    },
    {
        question: "Do you need my raw footage?",
        answer: "No. We use AI avatars and your product page to create everything. Just send us your product link and brief.",
    },
    {
        question: "Can I request a specific avatar style?",
        answer: "Yes. During onboarding, you can specify preferences for gender, age range, and style. We match avatars to your target audience.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-[var(--off-white)]">
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
                        Got Questions?
                    </span>
                    <h2>Frequently Asked Questions</h2>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-[var(--dark)]">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-[var(--purple)]"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-4 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600">
                        Still have questions?{" "}
                        <a
                            href="/call"
                            className="text-[var(--purple)] font-semibold hover:underline"
                        >
                            Book a free strategy call →
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
