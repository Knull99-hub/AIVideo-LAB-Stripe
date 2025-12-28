"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const plans = [
    {
        name: "Starter",
        price: "99",
        videos: "5",
        delivery: "3-5 days",
        cta: "Get Started",
        ctaHref: "/start?plan=starter",
        popular: false,
        features: [
            "5 UGC-style videos",
            "Vertical format (9:16)",
            "TikTok & Reels ready",
            "Natural delivery",
        ],
        bestFor: ["Testing UGC ads", "First-time creators", "Small brands"],
    },
    {
        name: "Growth",
        price: "179",
        videos: "10",
        delivery: "48-72h",
        cta: "Start Growing",
        ctaHref: "/start?plan=growth",
        popular: true,
        features: [
            "10 UGC-style videos",
            "Multiple hooks & angles",
            "Testimonial + product clips",
            "Ad-ready pacing",
        ],
        bestFor: ["Testing creatives", "Consistent posting", "Paid ads"],
    },
    {
        name: "Premium",
        price: "299",
        videos: "20",
        delivery: "48-72h priority",
        cta: "Scale My Ads",
        ctaHref: "/start?plan=premium",
        popular: false,
        features: [
            "20 UGC-style videos",
            "High-realism avatars",
            "Multiple hooks per concept",
            "A/B testing ready",
        ],
        bestFor: ["E-commerce brands", "Agencies", "High-volume campaigns"],
    },
];

const justification = [
    "Creative strategy (hooks, angles, scripts)",
    "AI actors trained for UGC-style delivery",
    "Platform-specific formatting (TikTok, Meta, Shorts)",
    "Fast iteration without reshoots",
    "Lower cost than creators, faster than agencies",
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-white">
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
                        Simple Pricing
                    </span>
                    <h2>Choose Your Plan</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        No subscriptions. Pay per video pack. Get started in minutes.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 ${plan.popular
                                    ? "bg-[var(--deep-blue)] text-white ring-4 ring-[var(--purple)] scale-105"
                                    : "bg-[var(--off-white)]"
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--purple)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    ⭐ Most Popular
                                </div>
                            )}

                            {/* Plan name */}
                            <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : ""}`}>
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="mt-4 mb-6">
                                <span className={`text-4xl font-bold ${plan.popular ? "text-white" : ""}`}>
                                    £{plan.price}
                                </span>
                                <span className={plan.popular ? "text-white/70" : "text-gray-500"}>
                                    {" "}/ {plan.videos} videos
                                </span>
                            </div>

                            {/* Delivery */}
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-6 ${plan.popular ? "bg-white/20" : "bg-[var(--purple)]/10 text-[var(--purple)]"
                                }`}>
                                ⚡ {plan.delivery}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <svg
                                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-[var(--peach)]" : "text-green-500"
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className={plan.popular ? "text-white/90" : "text-gray-700"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Best for */}
                            <div className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                                <span className="font-semibold">Best for:</span>{" "}
                                {plan.bestFor.join(", ")}
                            </div>

                            {/* CTA */}
                            <Button
                                href={plan.ctaHref}
                                variant={plan.popular ? "secondary" : "primary"}
                                className="w-full justify-center"
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Why our pricing works */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[var(--off-white)] rounded-2xl p-8 max-w-3xl mx-auto"
                >
                    <h3 className="text-xl font-bold text-center mb-6">
                        Why Our Pricing Works
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {justification.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="text-[var(--purple)]">✓</span>
                                <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
