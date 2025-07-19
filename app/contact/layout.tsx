import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pearly Whites Dental | Book Appointment | Umhlanga Dentist",
  description: "Contact celebrity dentist Dr. Devin Chetty at Pearly Whites Dental Studio in Umhlanga. Book your appointment today. Call +27 65 554 1518 or visit us at The Pearls of Umhlanga.",
  keywords: "contact dentist umhlanga, book dental appointment, pearly whites dental contact, dr devin chetty contact, umhlanga dental clinic, dental appointment booking",
  openGraph: {
    title: "Contact Pearly Whites Dental | Book Your Appointment",
    description: "Contact celebrity dentist Dr. Devin Chetty at Pearly Whites Dental Studio in Umhlanga. Professional dental care by appointment.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pearly Whites Dental Studio",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
