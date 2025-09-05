import React from "react";
import Header from "../components/Header";
import Awareness from "../components/Awareness";
import BeforeAfterSection from "../components/BeforeAfterSection";
import Services from "../components/Services";
import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celebrity Dentist in Umhlanga | Dr. Devin Chetty | Pearly Whites Dental",
  description: "Transform your smile with award-winning celebrity dentist Dr. Devin Chetty. Premium cosmetic dentistry, implants & whitening in Umhlanga. Trusted by 100+ celebrities. Book now!",
  keywords: "celebrity dentist umhlanga, cosmetic dentistry durban, dental implants umhlanga, teeth whitening durban, smile makeover, veneers umhlanga, dr devin chetty",
  openGraph: {
    title: "Celebrity Dentist in Umhlanga | Dr. Devin Chetty",
    description: "Transform your smile with award-winning celebrity dentist Dr. Devin Chetty. Premium cosmetic dentistry in Umhlanga.",
    images: [
      {
        url: "/header.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Devin Chetty - Celebrity Dentist in Umhlanga",
      },
    ],
  },
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />

      {/* About Dr. Chetty */}
      <Awareness />

      {/* Before & After Transformations */}
      <BeforeAfterSection />

      {/* Services */}
      <Services />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
