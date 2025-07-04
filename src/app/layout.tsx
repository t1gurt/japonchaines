'use client';

import { useState } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";
import MobileNavigation from "@/components/MobileNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAdSense from "@/components/GoogleAdSense";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import StructuredData from "@/components/StructuredData";
import { generateWebsiteSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const websiteSchema = generateWebsiteSchema();
  
  return (
    <html lang="fr">
      <head>
        <GoogleAdSense />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <GoogleAnalytics />
        <StructuredData data={websiteSchema} />
        <AnalyticsProvider>
          <Header />
          
                    <MobileHeader toggleMenu={toggleMenu} isOpen={isMenuOpen} />
          <MobileNavigation isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <main className="min-h-screen pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <BottomNavigation />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
