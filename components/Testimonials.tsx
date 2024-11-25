import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            quote: `Dr. Chetty transformed my smile. The results are incredible!`,
            name: "Happy Client",
            img: "/images/client1.jpg",
          },
          {
            quote: `I&rsquo;ve never felt more confident with my teeth. Highly recommend!`,
            name: "Satisfied Customer",
            img: "/images/client2.jpg",
          },
          {
            quote: `The professionalism and care are unmatched. Amazing experience.`,
            name: "Grateful Patient",
            img: "/images/client3.jpg",
          },
        ].map((testimonial, index) => (
          <div key={index} className="bg-light-grey p-6 rounded-lg shadow-lg">
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={64}
              height={64}
              className="rounded-full mb-4"
            />
            {/* Escape the quotes */}
            <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <span className="block mt-4 font-bold">{testimonial.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
