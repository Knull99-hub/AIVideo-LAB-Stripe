"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const LOGOS = [
    "Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"
];

const METRICS = [
    { value: "1M+", label: "Videos Processed" },
    { value: "500k+", label: "Creators" },
    { value: "$10M+", label: "Ad Spend Generated" },
];

export const TrustedBrands = () => {
    return (
        <section className="py-20 bg-neutral-50 relative">
            <div className="container mx-auto px-4">

                {/* Logos Grid */}
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                        {LOGOS.map((logo, idx) => (
                            <div key={idx} className="h-8 md:h-10 w-32 bg-neutral-300 rounded flex items-center justify-center text-xs font-mono text-neutral-500">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Metrics Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <Card className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 p-10 md:p-12 shadow-xl border border-neutral-100">
                        {METRICS.map((metric, idx) => (
                            <div key={idx} className="text-center border-b md:border-b-0 md:border-r last:border-0 border-neutral-100 pb-6 md:pb-0 last:pb-0">
                                <h3 className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">{metric.value}</h3>
                                <p className="text-neutral-500 font-medium">{metric.label}</p>
                            </div>
                        ))}
                    </Card>
                </motion.div>

            </div>
        </section>
    );
};
