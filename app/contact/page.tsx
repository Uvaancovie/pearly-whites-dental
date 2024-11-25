import React from "react";

const Contact = () => {
  return (
    <div className="bg-light-grey text-black">
      <header className="bg-dark-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We’re here to help. Get in touch today.</p>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border border-gray-300 rounded"
            ></textarea>
            <button type="submit" className="btn-primary w-full">
              Submit
            </button>
          </form>
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Reach Us</h2>
            <p>Email: info@devinchetty.com</p>
            <p>Phone: +27 123 456 789</p>
            <p>Address: 123 Main Street, Durban, South Africa</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
