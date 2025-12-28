"use client";

import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10 gradient-hero">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-white/10 pb-16">

                    {/* Brand */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-black font-heading">AIVideo-LAB</h2>
                        <p className="text-white/70 max-w-sm">
                            Create stunning video ads from any URL. The most advanced AI video generation platform for modern marketers.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Features</h4>
                        <ul className="space-y-2 text-white/60">
                            <li><a href="#" className="hover:text-white">Video Ads</a></li>
                            <li><a href="#" className="hover:text-white">AI Avatars</a></li>
                            <li><a href="#" className="hover:text-white">URL to Video</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Use Cases</h4>
                        <ul className="space-y-2 text-white/60">
                            <li><a href="#" className="hover:text-white">E-Commerce</a></li>
                            <li><a href="#" className="hover:text-white">Agencies</a></li>
                            <li><a href="#" className="hover:text-white">SaaS</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Company</h4>
                        <ul className="space-y-2 text-white/60">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© 2024 AIVideo-LAB. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
