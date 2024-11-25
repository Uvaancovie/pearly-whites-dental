import React from "react";
import Header from "../components/Header";
import Awareness from "../components/Awareness";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      {/* Awareness */}
      <Header />

      {/* Interest */}
      <Awareness />

      {/* Desire */}
      <Services />
      <Testimonials />

      {/* Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
