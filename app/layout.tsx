import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanna Park | Portfolio",
  description:
    "Industrial Designer exploring objects, systems, and future technologies.",

  openGraph: {
    title: "Hanna Park | Portfolio",
    description:
      "Industrial Designer exploring objects, systems, and future technologies.",
    url: "https://parkhanna.com",
    siteName: "Hanna Park",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hanna Park",
    description:
      "Industrial Designer exploring objects, systems, and future technologies.",
    images: ["/og-image.jpg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children} <Analytics /> 
      </body>
    </html>
  );
}
