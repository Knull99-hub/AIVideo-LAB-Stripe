import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Refund Policy | AIVideo-LAB",
    description: "Refund Policy for AIVideo-LAB video ad services.",
};

export default function RefundPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
                        <p className="text-gray-700 mb-4">
                            We stand behind our work. If you&apos;re not satisfied, we&apos;ll make it right.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Revisions First</h2>
                        <p className="text-gray-700 mb-4">
                            Before requesting a refund, we&apos;ll work with you to revise the deliverables until they match the agreed brief. One revision round is included in all plans.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Refund Eligibility</h2>
                        <p className="text-gray-700 mb-4">
                            <strong>Refunds apply only if deliverables are not delivered as agreed.</strong>
                        </p>
                        <p className="text-gray-700 mb-4">
                            This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Failure to deliver within the promised timeframe (without prior communication)</li>
                            <li>Deliverables that significantly deviate from the agreed brief</li>
                            <li>Technical issues that make videos unusable</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Non-Refundable Situations</h2>
                        <p className="text-gray-700 mb-4">
                            Refunds are not available for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Change of mind after delivery</li>
                            <li>Requests outside the original brief scope</li>
                            <li>Full concept changes (beyond revision scope)</li>
                            <li>Ad performance or business results</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">How to Request a Refund</h2>
                        <p className="text-gray-700 mb-4">
                            Contact us at hello@aivideolab.com within 7 days of delivery. Include your order details and reason for the request.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Processing Time</h2>
                        <p className="text-gray-700 mb-4">
                            Approved refunds are processed within 5-10 business days. Refunds are issued to the original payment method.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
