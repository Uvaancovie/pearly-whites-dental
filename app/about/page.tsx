import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-light-grey text-black">
      <header className="bg-dark-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Dr. Devin Chetty</h1>
        <p className="mt-4 text-lg">
          Trusted by 100+ celebrity clients, Dr. Chetty brings excellence to cosmetic dentistry.
        </p>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="mb-6 text-lg">
              Dr. Devin Chetty has been transforming smiles for over a decade. His expertise in
              advanced cosmetic and restorative dentistry has made him a trusted name in the
              industry. From veneers to implants, Dr. Chetty ensures every patient walks away with
              confidence.
            </p>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>10+ years of experience</li>
              <li>Certified in advanced cosmetic dentistry</li>
              <li>Trusted by over 100 celebrity clients</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/celeb1.jpg"
              alt="Celebrity 1"
              className="rounded-lg shadow-lg"
              width={300}
              height={300}
            />
            <Image
              src="/images/celeb2.jpg"
              alt="Celebrity 2"
              className="rounded-lg shadow-lg"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
