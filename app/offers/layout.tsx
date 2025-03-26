import React from "react";

export const metadata = {
  title: "🌟 March Special 🌟",
  description: "🎄✨ Get Holiday-Ready with a Brighter Smile! Offer ends December 31st!",
  openGraph: {
    title: "March Special Offers",
    description: "Trusted by 100+ clients. Offer ends December 31st!",
    images: [
      {
        url: "/december-special.jpeg",
        width: 1200,
        height: 630,
        alt: "December Special",
      },
    ],
  },
};

const OffersLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default OffersLayout;
