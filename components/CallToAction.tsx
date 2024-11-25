import React from "react";

const CallToAction: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-accent-purple to-accent-blue text-white text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
    <a
      href="https://calendly.com/devin-chetty"
      className="inline-block bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
    >
      Book Your Appointment Now
    </a>
  </section>
);

export default CallToAction;
