"use client";

import { motion } from "framer-motion";

const trustItems = [
    {
        icon: "🌍",
        title: "Global Delivery",
        description: "Serving brands worldwide",
    },
    {
        icon: "🔒",
        title: "GDPR Compliant",
        description: "Your data is protected",
    },
    {
        icon: "💳",
        title: "Secure Payments",
        description: "Stripe-powered checkout",
    },
    {
        icon: "📜",
        title: "Commercial Rights",
        description: "Full ownership included",
    },
];

export default function TrustCompliance() {
    return (
        <section className="bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2>Trust & Compliance</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="text-center p-6 rounded-xl bg-[var(--off-white)]"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
