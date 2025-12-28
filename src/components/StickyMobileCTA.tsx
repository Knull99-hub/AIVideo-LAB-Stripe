"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StickyMobileCTA() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, type: "spring", damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-100 p-4 shadow-lg"
        >
            <div className="flex gap-3">
                <Link
                    href="/start?plan=starter"
                    className="flex-1 bg-[var(--dark)] text-white text-center py-3 rounded-full font-semibold hover:bg-[var(--purple)] transition-colors"
                >
                    Start £99
                </Link>
                <Link
                    href="/call"
                    className="flex-1 bg-[var(--off-white)] text-[var(--dark)] text-center py-3 rounded-full font-semibold border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                    Book Call
                </Link>
            </div>
        </motion.div>
    );
}
