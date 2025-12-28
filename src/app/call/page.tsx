import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Book a Strategy Call | AIVideo-LAB",
    description: "Book a free strategy call with our team. Get personalized advice on your video ad strategy.",
};

export default function CallPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-[var(--off-white)]">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-[var(--purple)]/10 text-[var(--purple)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Free Strategy Call
                        </span>
                        <h1 className="text-4xl font-bold mb-4">Book Your Call</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Get personalized advice on your video ad strategy. We&apos;ll review your brand and give you actionable next steps.
                        </p>
                    </div>

                    {/* Calendly Embed Placeholder */}
                    <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                        <div className="w-20 h-20 bg-[var(--purple)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-10 h-10 text-[var(--purple)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Calendly Integration</h2>
                        <p className="text-gray-500 mb-6">
                            Embed your Calendly link here to let clients book directly.
                        </p>
                        <div className="bg-[var(--off-white)] rounded-xl p-8 border-2 border-dashed border-gray-200">
                            <p className="text-sm text-gray-400">
                                Replace this with:{" "}
                                <code className="bg-gray-100 px-2 py-1 rounded">
                                    &lt;CalendlyEmbed url=&quot;your-calendly-url&quot; /&gt;
                                </code>
                            </p>
                        </div>

                        {/* What you get */}
                        <div className="mt-12 text-left max-w-md mx-auto">
                            <h3 className="font-bold mb-4">What You&apos;ll Get:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Brand & offer audit",
                                    "Custom hook ideas for your product",
                                    "Clear next steps to get started",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
