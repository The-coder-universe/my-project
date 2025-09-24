import React from 'react';
import { Shield, Network, Smartphone, Lock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'CCTV Systems',
      description: 'Advanced surveillance solutions'
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Enterprise connectivity solutions'
    },
    {
      icon: Smartphone,
      title: 'IoT Solutions',
      description: 'Smart connected devices'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Comprehensive protection systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About A S Enterprises</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              A. S. Enterprises is a growing provider of smart surveillance, networking, and IoT solutions 
              tailored to meet the needs of modern businesses and homes.
            </p>
            <p className="text-lg text-gray-600">
              We are passionate about delivering reliable, user-friendly, and scalable technology services—from 
              CCTV systems to smart home automation—designed to enhance security and connectivity.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Company Image and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="A S Enterprises professional team"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To provide cutting-edge security and networking solutions that protect what matters most to our 
              clients while enabling them to embrace the future of connected technology.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">Expert installation and configuration by certified technicians</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">24/7 technical support and maintenance services</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">Partnerships with leading technology brands</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">Customized solutions for businesses of all sizes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Partners Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technology Partners</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {['Cisco', 'D-Link', 'Hikvision', 'Molex', 'TP-Link', 'Western Digital'].map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-2">
                    <span className="font-semibold text-gray-700">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
          <p className="text-xl mb-6">
            Contact us today to discuss your security and networking needs.
          </p>
          <div className="space-y-2">
            <p className="text-lg">📧 asindiasys@gmail.com</p>
            <p className="text-lg">📞 +91 6391090901</p>
            <p className="text-lg">📍 Vidyapith Road, Sigra, Varanasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;