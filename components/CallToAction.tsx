import React from "react";

const CallToAction: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-primary to-secondary text-center">
    <h2 className="text-4xl font-bold mb-6 text-dark">
      Ready to Transform Your Smile?
    </h2>
    <a
      href="https://calendly.com/way2flyagency/dental-implants"
      className="inline-block bg-secondary text-white px-6 py-3 rounded-lg hover:bg-primary hover:text-dark transition transform hover:scale-105"
    >
      Book Your Appointment Now
    </a>
  </section>
);

export default CallToAction;
