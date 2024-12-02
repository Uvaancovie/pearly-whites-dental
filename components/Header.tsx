import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="relative h-screen grid place-items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/landing-1.jpg"
          alt="Transform Your Smile"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-80"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4 text-white">
        <h1 className="text-5xl font-extrabold leading-tight">
          Transform Your Smile with{" "}
          <span className="text-primary">Dr. Devin Chetty</span>
        </h1>
        <p className="mt-4 text-lg text-secondary font-light text-white">
          Trusted by celebrities and clients worldwide, offering professional and advanced dental care tailored for your perfect smile.
        </p>
        <a
  href="#services"
  className="mt-6 inline-block px-8 py-3 bg-secondary text-white font-semibold text-lg rounded-full shadow-lg hover:bg-primary hover:shadow-xl transition transform hover:-translate-y-1"
>
  Explore Services
</a>
      </div>
    </header>
  );
};

export default Header;
