"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../ui/Button";

export default function LeadMagnet() {
    const [email, setEmail] = useState("");
    const [productUrl, setProductUrl] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    productUrl,
                    source: typeof window !== "undefined" ? window.location.search : "",
                }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
                setProductUrl("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="gradient-hero py-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl"
                >
                    {status === "success" ? (
                        <div className="text-center py-8">
                            <div className="text-5xl mb-4">🎉</div>
                            <h3 className="text-2xl font-bold mb-2">Check Your Inbox!</h3>
                            <p className="text-gray-600">
                                We&apos;ll send you 5 UGC hook ideas for your product within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <span className="inline-block bg-[var(--purple)]/10 text-[var(--purple)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    Free Resource
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Want 5 UGC Hooks for Your Product?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Get custom hook ideas tailored to your product — free.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Honeypot field for spam protection */}
                                <input
                                    type="text"
                                    name="website"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Page URL
                                    </label>
                                    <input
                                        type="url"
                                        id="productUrl"
                                        value={productUrl}
                                        onChange={(e) => setProductUrl(e.target.value)}
                                        placeholder="https://yourstore.com/product"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--purple)] focus:ring-2 focus:ring-[var(--purple)]/20 outline-none transition-all"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="secondary"
                                    className="w-full justify-center py-4"
                                >
                                    {status === "loading" ? "Sending..." : "Get My Free Hooks"}
                                </Button>

                                {status === "error" && (
                                    <p className="text-red-500 text-sm text-center">
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <p className="text-xs text-gray-500 text-center">
                                    No spam. We&apos;ll only send you hook ideas.
                                </p>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
