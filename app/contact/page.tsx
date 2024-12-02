import React from "react";

const Contact = () => {
  return (
    <div className="bg-light-grey text-black">
      <header className="bg-dark text-white py-16 text-center">
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
            <p>
              Email: <a href="mailto:info@devinchetty.com" className="hover:text-secondary">info@devinchetty.com</a>
            </p>
            <p>
              Phone: <a href="tel:+27123456789" className="hover:text-secondary">+27 123 456 789</a>
            </p>
            <p>Address: 6 Lagoon Drive, Umhlanga Rocks, Durban, 4320</p>
            {/* Google Maps */}
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
