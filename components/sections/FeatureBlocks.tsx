"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles, Video, Rocket, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
    {
        id: "discover",
        icon: Sparkles,
        label: "DISCOVER",
        title: "Find winning concepts instantly",
        description: [
            "Analyze competitor ads in real-time.",
            "Identify high-converting trends.",
            "Get AI-powered recommendations."
        ],
        cta: "Get Inspired",
        imagePlaceholder: "Discovery Dashboard"
    },
    {
        id: "create",
        icon: Video,
        label: "CREATE",
        title: "Generate video ads at scale",
        description: [
            "Turn product URLs into video scripts.",
            "Auto-generate AI avatars and voiceovers.",
            "Access millions of stock assets."
        ],
        cta: "Create Your First Ad Free",
        imagePlaceholder: "Video Editor UI"
    },
    {
        id: "launch",
        icon: Rocket,
        label: "LAUNCH",
        title: "Push to platforms seamlessly",
        description: [
            "Direct integration with TikTok & Meta.",
            "Auto-format for Stories, Reels, and Feeds.",
            "Schedule campaigns in one click."
        ],
        cta: "Start for Free",
        imagePlaceholder: "Campaign Manager"
    },
    {
        id: "optimize",
        icon: Settings,
        label: "OPTIMIZE",
        title: "Maximize your ROAS",
        description: [
            "A/B test variations automatically.",
            "Real-time performance analytics.",
            "Smart budget allocation suggestions."
        ],
        cta: "Optimize Now",
        imagePlaceholder: "Analytics Graph"
    }
];

export const FeatureBlocks = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {FEATURES.map((feature, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={feature.id} className={cn(
                            "flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 last:mb-0",
                            !isEven && "md:flex-row-reverse"
                        )}>
                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                        <feature.icon size={20} />
                                    </div>
                                    <span className="font-bold text-primary tracking-widest text-sm">{feature.label}</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 leading-tight">
                                    {feature.title}
                                </h2>

                                <ul className="space-y-3">
                                    {feature.description.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg text-neutral-600">
                                            <div className="h-1.5 w-1.5 rounded-full bg-secondary-peach" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Button className="mt-4">{feature.cta}</Button>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex-1 w-full"
                            >
                                <div className="aspect-[4/3] rounded-3xl bg-neutral-100 border border-neutral-200 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-200" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-neutral-300 group-hover:text-primary/50 transition-colors">
                                            {feature.imagePlaceholder}
                                        </span>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-peach/20 rounded-full blur-3xl group-hover:bg-secondary-peach/30 transition-colors" />
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
