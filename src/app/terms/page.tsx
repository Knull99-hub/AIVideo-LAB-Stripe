import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service | AIVideo-LAB",
    description: "Terms of Service for AIVideo-LAB video ad services.",
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
                        <p className="text-gray-700 mb-4">
                            AIVideo-LAB provides AI-generated UGC-style video ad creation services. By purchasing our services, you agree to these terms.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Deliverables</h2>
                        <p className="text-gray-700 mb-4">
                            Each plan includes a specified number of videos as described at checkout. Delivery times vary by plan:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Starter: 3-5 business days</li>
                            <li>Growth: 48-72 hours</li>
                            <li>Premium: 48-72 hours (priority)</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Revisions</h2>
                        <p className="text-gray-700 mb-4">
                            One revision round is included. This covers changes to hook, voice pacing, captions, or CTA — not full concept changes.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Commercial Rights</h2>
                        <p className="text-gray-700 mb-4">
                            Upon payment, you receive full commercial rights to use the delivered videos on any platform including paid advertising.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Client Responsibilities</h2>
                        <p className="text-gray-700 mb-4">
                            <strong>Client is responsible for the accuracy and legality of all product claims provided.</strong> AIVideo-LAB is not liable for claims made by the client in the video brief.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Refunds</h2>
                        <p className="text-gray-700 mb-4">
                            See our <a href="/refund-policy" className="text-[var(--purple)] hover:underline">Refund Policy</a> for details.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-700 mb-4">
                            AIVideo-LAB&apos;s liability is limited to the amount paid for the service. We are not responsible for indirect damages or lost profits.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact</h2>
                        <p className="text-gray-700 mb-4">
                            For questions about these terms, contact us at hello@aivideolab.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
