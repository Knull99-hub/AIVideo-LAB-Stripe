"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Card } from "@/components/ui/Card";

const CASES = [
    {
        category: "E-Commerce",
        outcome: "4.2x ROAS",
        brand: "Shopify Store",
        desc: "Scaled creative production for Black Friday.",
        metric: "Saved 40 hrs/week"
    },
    {
        category: "Agency",
        outcome: "3x Client Retention",
        brand: "AdGlobal",
        desc: "Provided rapid ad iterations for 50+ clients.",
        metric: "Launched 2k+ ads"
    },
    {
        category: "SaaS",
        outcome: "60% Lower CPA",
        brand: "TechFlow",
        desc: "Automated product demo videos from docs.",
        metric: "2.5x Engagement"
    },
    {
        category: "Gaming",
        outcome: "Top 10 Chart",
        brand: "PlayMobile",
        desc: "Generated UA creatives for global launch.",
        metric: "1M+ Installs"
    }
];

export const CaseStudies = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollMap = (dir: 1 | -1) => {
        if (containerRef.current) {
            const scrollAmount = 400;
            containerRef.current.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Success Stories</span>
                        <h2 className="text-4xl font-heading font-bold mt-2">See what's possible.</h2>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => scrollMap(-1)} className="p-3 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={() => scrollMap(1)} className="p-3 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x scroll-smooth"
                >
                    {CASES.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="snap-start flex-shrink-0 w-[400px]"
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full flex flex-col justify-between border border-neutral-200 hover:border-primary/50 transition-colors">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-secondary-peach/10 text-secondary-peach text-xs font-bold mb-4">{item.category}</span>
                                    <h3 className="text-4xl font-bold text-primary mb-2">{item.outcome}</h3>
                                    <h4 className="text-xl font-bold text-neutral-900">{item.brand}</h4>
                                    <p className="text-neutral-500 mt-2">{item.desc}</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-neutral-100 flex justify-between items-center">
                                    <span className="font-bold text-neutral-700">{item.metric}</span>
                                    <a href="#" className="font-bold text-primary hover:underline">Read Case Study →</a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
