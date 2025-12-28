import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AIVideo-LAB | AI Video Ads That Convert",
  description: "UGC-style AI video ads delivered in 48-72 hours. Lower cost than creators, faster than agencies.",
  keywords: ["AI video ads", "UGC ads", "video marketing", "AI avatars", "TikTok ads", "Meta ads"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
