import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Scalable Web Solutions | Strategic Technology Execution",
    template: "%s | Scalable Web Solutions",
  },
  description: "Custom software delivery across product, infrastructure, and security. Eight years of senior-level execution in frontend, backend, mobile, pen testing, and enterprise solutions for ambitious companies.",
  keywords: ["scalable web solutions", "custom software development", "frontend development", "backend development", "mobile development", "penetration testing", "enterprise software", "technology consulting", "software engineering", "infrastructure", "security"],
  authors: [{ name: "Scalable Web Solutions" }],
  creator: "Scalable Web Solutions",
  publisher: "Scalable Web Solutions",
  metadataBase: new URL("https://scalableweb.solutions"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scalableweb.solutions",
    title: "Scalable Web Solutions | Strategic Technology Execution",
    description: "Custom software delivery across product, infrastructure, and security. Eight years of senior-level execution for ambitious companies.",
    siteName: "Scalable Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scalable Web Solutions - Strategic Technology Execution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalable Web Solutions | Strategic Technology Execution",
    description: "Custom software delivery across product, infrastructure, and security. Eight years of senior-level execution for ambitious companies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
