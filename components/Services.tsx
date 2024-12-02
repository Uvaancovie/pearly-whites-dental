import React from "react";
import Image from "next/image";

const Services: React.FC = () => (
  <section id="services" className="py-16 bg-light-grey">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Zoom Whitening",
            description: "Get a brighter smile in just one session.",
            img: "/zoom-whitening.jpg",
          },
          {
            title: "Veneers",
            description: "Transform your teeth for the perfect smile.",
            img: "/veneers.jpg",
          },
          {
            title: "Dental Implants",
            description: "Replace missing teeth with natural-looking implants.",
            img: "/dental-implants.jpg",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              <p className="mt-2 text-dark">{service.description}</p>
              <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
