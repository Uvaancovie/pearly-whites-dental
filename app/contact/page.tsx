'use client';

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // For demonstration, we’re showing a simple WhatsApp message template.
    // You can customize the 'text' parameter for your business needs.
    const whatsappUrl = `https://wa.me/27655541518?text=Hello%20Way2FlyDigital,%20my%20name%20is%20${encodeURIComponent(
      formData.name
    )}%20and%20my%20email%20is%20${encodeURIComponent(
      formData.email
    )}.%20${encodeURIComponent(formData.message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-light-grey text-black">
      <header className="bg-dark text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We’re here to help. Get in touch today.</p>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border border-gray-300 rounded"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn-primary w-full">
              Submit
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Reach Us</h2>
            <p>
              Email:{" "}
              <a href="mailto:info@devinchetty.com" className="hover:text-secondary">
                info@devinchetty.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+27655541518" className="hover:text-secondary">
                +27 65 554 1518
              </a>
            </p>
            <p>Address: 6 Lagoon Drive, Umhlanga Rocks, Durban, 4320</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6396140628176!2d31.083387515055377!3d-29.726720081991733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa89b1f7e569%3A0xb5c5e6c28d7c4e36!2sPearly%20Whites%20Dental%20Studio!5e0!3m2!1sen!2sza!4v1234567890!5m2!1sen!2sza"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Pearly Whites Dental Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
