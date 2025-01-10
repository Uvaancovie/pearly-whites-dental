import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Navigation */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Devin Chetty. All rights reserved.
        </p>
        <nav className="mt-4 space-x-4">
          <a href="/privacy" className="hover:underline transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline transition">
            Terms of Service
          </a>
        </nav>

        {/* Pearly Whites Information */}
        <div className="mt-6 text-sm text-white">
          <p className="font-semibold">Pearly Whites Dental Studio</p>
          <p>Located in: The Pearls Of Umhlanga</p>
          <p>Address: 6 Lagoon Drive, Umhlanga Rocks, Durban, 4320</p>
          <p>
            Phone:{" "}
            <a href="tel:+27 65 554 1518" className="hover:underline transition">
            +27 65 554 1518
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 space-x-4">
          <a
            href="https://www.instagram.com/pearlywhitesdentalstudio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/pearlywhitesdentalstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
