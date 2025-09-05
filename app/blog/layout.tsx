import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Health Blog | Expert Tips from Dr. Devin Chetty",
  description: "Expert dental health advice, oral hygiene tips, and cosmetic dentistry insights from celebrity dentist Dr. Devin Chetty. Professional guidance for optimal oral health.",
  keywords: [
    "dental health blog",
    "oral hygiene tips",
    "cosmetic dentistry advice",
    "dr devin chetty blog",
    "dental care tips",
    "teeth whitening advice",
    "gum health",
    "preventive dentistry",
    "dental nutrition",
    "oral health lifestyle"
  ],
  openGraph: {
    title: "Dental Health Blog | Expert Tips from Dr. Devin Chetty",
    description: "Expert dental health advice and oral hygiene tips from celebrity dentist Dr. Devin Chetty.",
    images: [
      {
        url: "/blog/dental-health-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Devin Chetty Dental Health Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Health Blog | Expert Tips from Dr. Devin Chetty",
    description: "Expert dental health advice from celebrity dentist Dr. Devin Chetty",
    images: ["/blog/dental-health-blog.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
