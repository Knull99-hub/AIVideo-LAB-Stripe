import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | AIVideo-LAB",
    description: "Privacy Policy for AIVideo-LAB video ad services.",
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                        <p className="text-gray-700 mb-4">
                            We collect information you provide directly: name, email, product URLs, and brand information submitted through our forms.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>To deliver our video ad services</li>
                            <li>To communicate about your order</li>
                            <li>To send marketing communications (with consent)</li>
                            <li>To improve our services</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Sharing</h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell your personal information. We may share data with service providers (payment processors, email services) who help us operate.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Retention</h2>
                        <p className="text-gray-700 mb-4">
                            We retain your information for as long as necessary to provide services and comply with legal obligations.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights (GDPR)</h2>
                        <p className="text-gray-700 mb-4">
                            If you&apos;re in the EU/UK, you have the right to access, correct, delete, or port your data. Contact us to exercise these rights.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies</h2>
                        <p className="text-gray-700 mb-4">
                            We use essential cookies for site functionality and analytics cookies to improve our service. You can manage preferences via the cookie banner.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact</h2>
                        <p className="text-gray-700 mb-4">
                            For privacy questions, contact us at hello@aivideolab.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
