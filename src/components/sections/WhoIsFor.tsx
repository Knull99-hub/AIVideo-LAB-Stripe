"use client";

import { motion } from "framer-motion";

const perfectFor = [
    { icon: "🛒", text: "E-commerce brands" },
    { icon: "🏢", text: "Agencies managing ads" },
    { icon: "🚀", text: "Consumer brands testing creatives" },
    { icon: "📈", text: "Founders scaling fast" },
];

const notFor = [
    { icon: "❌", text: "Viral magic seekers" },
    { icon: "❌", text: "$0 ad spend businesses" },
    { icon: "❌", text: "100% manual filming only" },
];

export default function WhoIsFor() {
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
                    <h2>Is AIVideo-LAB Right For You?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        We work best with brands ready to scale their video ad content.
                    </p>
                </motion.div>

                {/* Split Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Perfect For */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 border-2 border-green-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">✅</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-700">Perfect For</h3>
                        </div>

                        <ul className="space-y-4">
                            {perfectFor.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-gray-700">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not For */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 border-2 border-red-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">⛔</span>
                            </div>
                            <h3 className="text-xl font-bold text-red-700">Not For</h3>
                        </div>

                        <ul className="space-y-4">
                            {notFor.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-gray-700">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600">
                        Sound like you?{" "}
                        <a
                            href="#pricing"
                            className="text-[var(--purple)] font-semibold hover:underline"
                        >
                            See our plans →
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
