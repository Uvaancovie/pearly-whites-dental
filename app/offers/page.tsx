"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const offers = [
  {
    title: "Black Friday Special",
    description: "50% off Zoom Whitening this month only.",
    details: "Limited slots available. Book now to secure your spot!",
  },
  {
    title: "Family Package",
    description: "Bring your family and save 20% on group appointments.",
    details: "Applicable to groups of 3 or more. Offer valid until December 31st.",
  },
  {
    title: "New Patient Offer",
    description: "Free consultation for first-time patients.",
    details: "Offer valid until January 15th. Book now!",
  },
];

const Offers = () => {
  return (
    <div className="bg-light-grey text-black">
      <header className="bg-dark-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Exclusive Offers</h1>
        <p className="mt-4 text-lg">Take advantage of our special deals today!</p>
      </header>

      {/* Carousel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-2">{offer.title}</h2>
                  <p className="text-gray-700">{offer.description}</p>
                  <p className="mt-4 text-sm text-gray-500">{offer.details}</p>
                  <button className="btn-primary mt-4">Book Now</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Offers;
