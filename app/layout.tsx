import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// Local fonts
import localFont from "next/font/local";

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

// Enhanced Metadata for SEO
export const metadata = {
  title: {
    default: "Dr. Devin Chetty | Celebrity Dentist | Pearly Whites Dental Studio",
    template: "%s | Pearly Whites Dental Studio"
  },
  description: "Award-winning celebrity dentist Dr. Devin Chetty offers premium dental services in Umhlanga. Trusted by 100+ celebrities. Cosmetic dentistry, implants, whitening & more.",
  keywords: [
    "celebrity dentist",
    "cosmetic dentistry",
    "dental implants", 
    "teeth whitening",
    "Umhlanga dentist",
    "Durban dentist",
    "veneers",
    "dental crowns",
    "Dr Devin Chetty",
    "Pearly Whites Dental",
    "zoom whitening",
    "dental surgery",
    "smile makeover"
  ],
  authors: [{ name: "Dr. Devin Chetty" }],
  creator: "Dr. Devin Chetty",
  publisher: "Pearly Whites Dental Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://pearlywhitesdental.co.za',
    title: 'Dr. Devin Chetty | Celebrity Dentist | Premium Dental Care',
    description: 'Award-winning celebrity dentist in Umhlanga. Trusted by 100+ celebrities for cosmetic dentistry, implants, and smile transformations.',
    siteName: 'Pearly Whites Dental Studio',
    images: [
      {
        url: '/header.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Devin Chetty - Celebrity Dentist',
      },
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Pearly Whites Dental Studio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Devin Chetty | Celebrity Dentist | Premium Dental Care',
    description: 'Award-winning celebrity dentist in Umhlanga. Trusted by 100+ celebrities.',
    images: ['/header.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'healthcare',
  classification: 'dental services',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pearlywhitesdental.co.za'),
  alternates: {
    canonical: '/',
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://pearlywhitesdental.co.za" />
        
        {/* Favicon - Multiple formats for better browser support */}
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/logo.jpg" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.jpg" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/jpeg" sizes="192x192" href="/logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="512x512" href="/logo.jpg" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/logo.jpg" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* Vercel Analytics */}
        <Analytics />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
