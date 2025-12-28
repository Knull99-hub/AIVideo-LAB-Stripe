"use client";

import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

const plans = {
    starter: { name: "Starter", price: "£99", delivery: "3-5 days" },
    growth: { name: "Growth", price: "£179", delivery: "48-72h" },
    premium: { name: "Premium", price: "£299", delivery: "48-72h priority" },
};

function StartForm() {
    const searchParams = useSearchParams();
    const planParam = searchParams.get("plan") as keyof typeof plans | null;

    const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>("starter");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        productUrl: "",
        targetAudience: "",
        offer: "",
        brandTone: "",
        competitors: "",
        mustHaveClaims: "",
        forbiddenClaims: "",
        assets: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        if (planParam && plans[planParam]) {
            setSelectedPlan(planParam);
        }
    }, [planParam]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/onboarding", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    plan: selectedPlan,
                }),
            });

            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-12 text-center shadow-lg"
            >
                <div className="text-6xl mb-6">🎉</div>
                <h1 className="text-3xl font-bold mb-4">You&apos;re All Set!</h1>
                <p className="text-gray-600 mb-6">
                    We&apos;ve received your order. Our team will review your brief and start working on your videos.
                </p>
                <div className="bg-[var(--purple)]/10 rounded-xl p-6 mb-6">
                    <p className="text-[var(--purple)] font-semibold">
                        Expected delivery: {plans[selectedPlan].delivery}
                    </p>
                </div>
                <p className="text-sm text-gray-500">
                    Check your email for confirmation and next steps.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Get Started</h1>
                <p className="text-gray-600">
                    Tell us about your product and we&apos;ll create your videos.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Plan Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Plan
                    </label>
                    <select
                        name="plan"
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value as keyof typeof plans)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                    >
                        {Object.entries(plans).map(([key, plan]) => (
                            <option key={key} value={key}>
                                {plan.name} - {plan.price} ({plan.delivery})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Page URL *
                    </label>
                    <input
                        type="url"
                        name="productUrl"
                        value={formData.productUrl}
                        onChange={handleChange}
                        placeholder="https://yourstore.com/product"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target Audience *
                    </label>
                    <input
                        type="text"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleChange}
                        placeholder="e.g., Women 25-45 interested in skincare"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Offer & Price *
                    </label>
                    <input
                        type="text"
                        name="offer"
                        value={formData.offer}
                        onChange={handleChange}
                        placeholder="e.g., 20% off first order, Free shipping over $50"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Brand Tone Examples (optional)
                    </label>
                    <textarea
                        name="brandTone"
                        value={formData.brandTone}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Links to ads or creators whose style you like"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none resize-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Competitor Ads (optional)
                    </label>
                    <textarea
                        name="competitors"
                        value={formData.competitors}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Links to 3 competitor ads you like"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none resize-none"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Must-Have Claims
                        </label>
                        <textarea
                            name="mustHaveClaims"
                            value={formData.mustHaveClaims}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Claims you want featured"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none resize-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Forbidden Claims
                        </label>
                        <textarea
                            name="forbiddenClaims"
                            value={formData.forbiddenClaims}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Claims to avoid"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none resize-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Assets Link (optional)
                    </label>
                    <input
                        type="url"
                        name="assets"
                        value={formData.assets}
                        onChange={handleChange}
                        placeholder="Google Drive or Dropbox link to brand assets"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none"
                    />
                </div>

                {status === "error" && (
                    <p className="text-red-500 text-sm text-center">
                        Something went wrong. Please try again or contact us.
                    </p>
                )}

                <Button
                    type="submit"
                    variant="secondary"
                    className="w-full justify-center py-4"
                >
                    {status === "loading" ? "Submitting..." : `Continue to Payment - ${plans[selectedPlan].price}`}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{" "}
                    <a href="/terms" className="text-[var(--purple)] hover:underline">Terms</a> and{" "}
                    <a href="/refund-policy" className="text-[var(--purple)] hover:underline">Refund Policy</a>.
                </p>
            </form>
        </motion.div>
    );
}

function LoadingState() {
    return (
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
        </div>
    );
}

export default function StartPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-[var(--off-white)]">
                <div className="container mx-auto max-w-3xl">
                    <Suspense fallback={<LoadingState />}>
                        <StartForm />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </>
    );
}
