"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
    {
        name: "Free",
        price: { monthly: 0, annual: 0 },
        features: ["5 mins/mo", "Watermarked", "720p Export", "Basic Avatars"]
    },
    {
        name: "Starter",
        price: { monthly: 29, annual: 24 },
        features: ["30 mins/mo", "No Watermark", "1080p Export", "Custom Avatars"]
    },
    {
        name: "Pro",
        price: { monthly: 89, annual: 72 },
        features: ["120 mins/mo", "Priority Processing", "4K Export", "API Access"],
        popular: true
    },
    {
        name: "Enterprise",
        price: { monthly: "Custom", annual: "Custom" },
        features: ["Unlimited", "Dedicated Account Mgr", "SSO & Security", "Custom Models"]
    }
];

export const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="py-24 bg-neutral-50" id="pricing">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Simple, transparent pricing</h2>
                <p className="text-neutral-500 mb-10">Start for free, scale as you grow.</p>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={cn("text-sm font-bold transition-colors", !annual ? "text-neutral-900" : "text-neutral-400")}>Monthly</span>
                    <button
                        onClick={() => setAnnual(!annual)}
                        className="w-14 h-8 rounded-full bg-neutral-200 p-1 relative transition-colors duration-300 focus:outline-none"
                    >
                        <div className={cn("w-6 h-6 rounded-full bg-primary shadow-sm transition-transform duration-300", annual ? "translate-x-6" : "")} />
                    </button>
                    <span className={cn("text-sm font-bold transition-colors", annual ? "text-neutral-900" : "text-neutral-400")}>Annual <span className="text-primary text-xs ml-1">(Save 20%)</span></span>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PLANS.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={cn(
                                "relative rounded-2xl p-8 bg-white border text-left flex flex-col",
                                plan.popular ? "border-primary shadow-2xl scale-105 z-10" : "border-neutral-200 shadow-sm"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-black">{typeof plan.price.monthly === 'number' ? `$${annual ? plan.price.annual : plan.price.monthly}` : plan.price.monthly}</span>
                                {typeof plan.price.monthly === 'number' && <span className="text-neutral-500">/mo</span>}
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-neutral-600">
                                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? "primary" : "secondary"} className="w-full justify-center">
                                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
