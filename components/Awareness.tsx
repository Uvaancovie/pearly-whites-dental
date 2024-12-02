import React from "react";
import Image from "next/image";

const Awareness: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Devin's Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Meet Dr. Devin Chetty</h2>
          <p className="mb-6 text-lg">
            A renowned dental professional with over a decade of experience, trusted by 100+
            celebrity clients. Dr. Chetty specializes in advanced cosmetic and restorative dentistry
            to give you the perfect smile.
          </p>
        </div>

        {/* Celebrity Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/header.jpg"
            alt="Dr. Devin Chetty with Celebrity"
            className="rounded-lg shadow-lg"
            width={300}
            height={300}
          />
          <Image
            src="/jesse-kriel.jpg"
            alt="Jesse Kriel"
            className="rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Awareness;
