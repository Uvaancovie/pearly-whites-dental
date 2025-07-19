import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery | Smile Transformations | Dr. Devin Chetty",
  description: "See dramatic before and after smile transformations by celebrity dentist Dr. Devin Chetty. Real patient results from cosmetic dentistry, veneers, whitening & implants in Umhlanga.",
  keywords: [
    "before after dental transformations",
    "smile makeover results",
    "cosmetic dentistry before after",
    "dental veneers before after",
    "teeth whitening results",
    "dental implants before after",
    "dr devin chetty results",
    "umhlanga dentist before after",
    "celebrity dentist transformations",
    "smile transformation gallery"
  ],
  openGraph: {
    title: "Before & After Smile Transformations | Dr. Devin Chetty",
    description: "See dramatic before and after smile transformations by celebrity dentist Dr. Devin Chetty. Real patient results from premium dental treatments.",
    images: [
      {
        url: "/before&after/after1.jpg",
        width: 1200,
        height: 630,
        alt: "Before and after dental transformation results by Dr. Devin Chetty",
      },
      {
        url: "/before&after/after2.jpg", 
        width: 1200,
        height: 630,
        alt: "Professional teeth whitening before and after results",
      },
      {
        url: "/before&after/after3.jpg",
        width: 1200,
        height: 630,
        alt: "Dental implant and crown restoration results",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Before & After Smile Transformations | Dr. Devin Chetty",
    description: "See dramatic smile transformations by celebrity dentist Dr. Devin Chetty",
    images: ["/before&after/after1.jpg"],
  },
  alternates: {
    canonical: "/before-after",
  },
};

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
