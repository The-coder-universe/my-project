import React from 'react';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold">A S Enterprises</h3>
                <p className="text-gray-400 text-sm">Security & IoT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of security and networking solutions for modern businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">Vidyapith Road, Sigra, Varanasi</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">+91 6391090901</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">asindiasys@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CCTV Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Networking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IoT Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Access Control</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fire Safety</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400">
            © 2025 A S Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;