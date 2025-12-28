"use client";

import { motion } from "framer-motion";

const features = [
    { name: "Cost", aivideo: "Low (from £99)", creators: "High (£500+)", agencies: "Very High (£2k+)" },
    { name: "Speed", aivideo: "48-72h", creators: "Days/Weeks", agencies: "Weeks" },
    { name: "Scaling", aivideo: "Unlimited", creators: "Limited", agencies: "Slow" },
    { name: "Reshoots", aivideo: "Free", creators: "Paid", agencies: "Paid" },
    { name: "AI-Optimized Hooks", aivideo: "Yes", creators: "No", agencies: "Rare" },
];

export default function ComparisonTable() {
    const Check = () => (
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );

    const Cross = () => (
        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );

    return (
        <section className="bg-white">
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
                        Why Choose Us
                    </span>
                    <h2>AIVideo-LAB vs The Alternatives</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        See why brands choose AI-powered video ads.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto overflow-x-auto"
                >
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left py-4 px-4 border-b-2 border-gray-100">Feature</th>
                                <th className="text-center py-4 px-4 border-b-2 border-[var(--purple)] bg-[var(--purple)]/5">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-6 h-6 rounded bg-[var(--purple)] flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">AI</span>
                                        </div>
                                        <span className="font-bold text-[var(--purple)]">AIVideo-LAB</span>
                                    </div>
                                </th>
                                <th className="text-center py-4 px-4 border-b-2 border-gray-100">Creators</th>
                                <th className="text-center py-4 px-4 border-b-2 border-gray-100">Agencies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <motion.tr
                                    key={feature.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="border-b border-gray-50"
                                >
                                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                                    <td className="py-4 px-4 text-center bg-[var(--purple)]/5">
                                        <div className="flex items-center justify-center gap-2">
                                            <Check />
                                            <span className="text-sm font-medium text-gray-700">{feature.aivideo}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <Cross />
                                            <span className="text-sm text-gray-500">{feature.creators}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <Cross />
                                            <span className="text-sm text-gray-500">{feature.agencies}</span>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
