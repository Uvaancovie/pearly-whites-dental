import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">PW</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Pearly Whites</h3>
                <p className="text-gray-300">Dental Studio</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience world-class dental care with our state-of-the-art treatments 
              and personalized approach to oral health.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">The Pearls Of Umhlanga</p>
                  <p className="text-gray-300 text-sm">6 Lagoon Drive, Umhlanga Rocks, Durban, 4320</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+27655541518" className="text-gray-300 hover:text-white transition-colors">
                  +27 65 554 1518
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@pearlywhitesdental.co.za" className="text-gray-300 hover:text-white transition-colors">
                  info@pearlywhitesdental.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pearlywhitesdentalstudio_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.facebook.com/pearlywhitesdentalstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Pearly Whites Dental Studio. All rights reserved.
          </p>
          <div className="mt-4 space-x-6 text-sm">
            <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
