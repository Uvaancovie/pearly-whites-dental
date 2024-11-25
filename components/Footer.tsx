import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Devin Chetty. All rights reserved.
        </p>
        <nav className="mt-4 space-x-4">
          <a href="/privacy" className="hover:text-accent-purple">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-accent-purple">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
