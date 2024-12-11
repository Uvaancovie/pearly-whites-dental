"use client";

import React from "react";
import Image from "next/image";

const beforeAfterImages = [
  { before: "/before&after/before1.jpg", after: "/before&after/after1.jpg" },
  { before: "/before&after/before2.jpg", after: "/before&after/after2.jpg" },
  { before: "/before&after/before3.jpg", after: "/before&after/after3.jpg" },
  // Add more images here
];

const BeforeAfter: React.FC = () => {
  return (
    <div className="bg-light-grey text-black min-h-screen py-16">
      <header className="bg-dark-black text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Before and After Transformations</h1>
        <p className="mt-4 text-lg">See the amazing results from our dental services!</p>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-center text-lg font-bold py-4">Transformation {index + 1}</h3>
              <div className="relative">
                <div className="grid grid-cols-2">
                  {/* Before Image */}
                  <div className="relative">
                    <Image
                      src={image.before}
                      alt={`Before Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 bg-dark-black bg-opacity-50 text-white p-2 text-center w-full">
                      Before
                    </div>
                  </div>
                  {/* After Image */}
                  <div className="relative">
                    <Image
                      src={image.after}
                      alt={`After Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary bg-opacity-50 text-white p-2 text-center w-full">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeforeAfter;
