import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fayalwan Restaurant | Riyadh, Saudi Arabia | Authentic Kerala Food",
  description: "Experience the authentic taste of Kerala at Fayalwan Restaurant in Riyadh. Serving premium traditional dishes with unmatched hygiene and quality.",
  keywords: [
    "Fayalwan Restaurant",
    "Kerala Food Riyadh",
    "Authentic Kerala Cuisine",
    "Riyadh Restaurant",
    "Best Biryani Riyadh",
    "Indian Food Saudi Arabia",
    "Fayalwan Riyadh",
    "Kerala Parotta",
    "Mandi Riyadh",
    "Fayawan Menu"
  ],
  openGraph: {
    title: "Fayalwan Restaurant | Riyadh, Saudi Arabia",
    description: "Authentic Kerala Food experience in Riyadh. Premium quality, traditional recipes, and exceptional hygiene.",
    url: "https://fayalwanrestaurant.com", // Replace with your actual domain
    siteName: "Fayalwan Restaurant",
    images: [
      {
        url: "/assets/Frames/wallPic.webp",
        width: 1200,
        height: 630,
        alt: "Fayalwan Restaurant Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayalwan Restaurant | Riyadh, Saudi Arabia",
    description: "Authentic Kerala Food experience in Riyadh. Premium quality, traditional recipes, and exceptional hygiene.",
    images: ["/assets/Frames/wallPic.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
