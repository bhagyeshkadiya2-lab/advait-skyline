import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

// Optimize and declare fonts to avoid layout shift
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advait Skyline — Premium 1 & 2 BHK Homes & Shops by Dhanasvi Infra",
  description: "Discover premium 1 & 2 BHK luxury residential apartments and modern commercial shopfronts at Advait Skyline, Naroli–Bhilad Checkpost, Dadra & Nagar Haveli. Developed by Dhanasvi Infra.",
  keywords: [
    "Advait Skyline",
    "Dhanasvi Infra",
    "Naroli Bhilad Checkpost apartments",
    "1 BHK flat Dadra and Nagar Haveli",
    "2 BHK luxury home Bhilad",
    "Commercial shop space Vadfaliya",
    "Real estate investment Dadra Nagar Haveli",
    "MAHA RERA real estate Dadra"
  ],
  alternates: {
    canonical: "https://www.advaitskyline.com",
  },
  openGraph: {
    title: "Advait Skyline — Premium 1 & 2 BHK Homes & Shops",
    description: "Premium living and smart investment opportunity at the Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli. MAHA RERA Registered.",
    url: "https://www.advaitskyline.com",
    siteName: "Advait Skyline",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Advait Skyline Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-cream text-brand-charcoal font-body antialiased selection:bg-brand-copper selection:text-white">
        <PageLoader />
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
