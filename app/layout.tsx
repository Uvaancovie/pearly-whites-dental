import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Devin Chetty | Transform Your Smile",
  description:
    "Professional dental services by Dr. Devin Chetty, trusted by celebrities worldwide. Book your consultation now.",
  keywords: [
    "dentist",
    "dental services",
    "Devin Chetty",
    "cosmetic dentistry",
    "Zoom Whitening",
    "Veneers",
    "dental implants",
  ],
  openGraph: {
    title: "Devin Chetty | Transform Your Smile",
    description:
      "Professional dental services by Dr. Devin Chetty. Trusted by 100+ celebrity clients. Book your consultation now.",
    url: "https://www.devinchetty.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devin Chetty | Transform Your Smile",
    description: "Book a consultation with Dr. Devin Chetty for advanced dental care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add metadata dynamically */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={metadata.description || "Default description for the website"}
        />
        <meta
          name="keywords"
          content={metadata.keywords ? metadata.keywords.join(", ") : undefined}
        />
        <meta property="og:title" content={metadata.openGraph?.title || "Default Title"} />
        <meta
          property="og:description"
          content={
            metadata.openGraph?.description || "Default OpenGraph description"
          }
        />
        <meta property="og:type" content={metadata.openGraph?.type || "website"} />
        <meta property="og:url" content={metadata.openGraph?.url || "https://default-url.com"} />
        <meta name="twitter:card" content={metadata.twitter?.card || "summary_large_image"} />
        <meta
          name="twitter:title"
          content={metadata.twitter?.title || "Default Twitter Title"}
        />
        <meta
          name="twitter:description"
          content={
            metadata.twitter?.description || "Default Twitter description"
          }
        />
        <title>{metadata.title || "Default Title"}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="min-h-screen">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
