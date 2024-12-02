import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            quote: `Dr. Chetty transformed my smile. The results are incredible!`,
            name: "Happy Client",
            img: "/client1.jpg",
          },
          {
            quote: `I’ve never felt more confident with my teeth. Highly recommend!`,
            name: "Satisfied Customer",
            img: "/client2.jpg",
          },
          {
            quote: `The professionalism and care are unmatched. Amazing experience.`,
            name: "Grateful Patient",
            img: "/client3.jpg",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-light p-6 rounded-lg shadow-lg text-center"
          >
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={64}
              height={64}
              className="rounded-full mb-4 mx-auto"
            />
            <p className="italic text-dark">&ldquo;{testimonial.quote}&rdquo;</p>
            <span className="block mt-4 font-bold text-primary">{testimonial.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
