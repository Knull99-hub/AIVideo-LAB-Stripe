"use client";

import { Card } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";

export const TrustCompliance = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-neutral-50 rounded-3xl p-10">
                    <div className="flex flex-col items-center text-center p-4">
                        <ShieldCheck size={40} className="text-primary mb-4" />
                        <h3 className="font-bold text-neutral-900">SOC 2 Type II</h3>
                        <p className="text-sm text-neutral-500">Certified Compliant</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <ShieldCheck size={40} className="text-secondary-blue mb-4" />
                        <h3 className="font-bold text-neutral-900">GDPR Ready</h3>
                        <p className="text-sm text-neutral-500">Data Protection</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <ShieldCheck size={40} className="text-secondary-peach mb-4" />
                        <h3 className="font-bold text-neutral-900">Enterprise Grade</h3>
                        <p className="text-sm text-neutral-500">SSO & Encryption</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <ShieldCheck size={40} className="text-neutral-700 mb-4" />
                        <h3 className="font-bold text-neutral-900">24/7 Support</h3>
                        <p className="text-sm text-neutral-500">Dedicated Teams</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
