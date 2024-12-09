import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-light-grey text-black">
      <header className="bg-dark-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg">Professional care tailored to your needs.</p>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Consult & Cleaning",
              description: "Maintain oral health with regular consultations and cleaning.",
              img: "/consult-cleaning.jpg", // Update this path with the actual image path
            },
            {
              title: "Active Aligners",
              description: "Straighten your teeth discreetly with active aligners.",
              img: "/active-aligners.jpg", // Update this path with the actual image path
            },
            {
              title: "Dental Implants",
              description: "Replace missing teeth with natural-looking implants.",
              img: "/dental-implants.jpg", // Update this path with the actual image path
            },
            {
              title: "Dentures",
              description: "Restore your smile with comfortable, custom-fit dentures.",
              img: "/dentures2.jpg", // Update this path with the actual image path
            },
            {
              title: "Crowns & Veneers",
              description: "Enhance the aesthetics and functionality of your teeth.",
              img: "/crowns-veneers.jpg", // Update this path with the actual image path
            },
            {
              title: "Zoom Whitening",
              description: "Get a brighter smile in just one session.",
              img: "/zoom-whitening.jpg",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="mt-2">{service.description}</p>
                <button className="btn-primary mt-4">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
