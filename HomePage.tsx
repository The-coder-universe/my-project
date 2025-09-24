import React, { useState } from 'react';
import { Shield, Monitor, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { getProducts } from '../../utils/storage';
import WelcomeModal from '../WelcomeModal';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const products = getProducts();

  const features = [
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Round-the-clock surveillance and monitoring services'
    },
    {
      icon: CheckCircle,
      title: '99.9% Uptime',
      description: 'Reliable systems with industry-leading uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Expert Installation',
      description: 'Professional installation by certified technicians'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    }
  ];

  const partners = [
    'Cisco', 'D-Link', 'Hikvision', 'Molex', 'TP-Link', 'Western Digital'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced Security & IoT Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading provider of CCTV surveillance, networking infrastructure, and IoT technologies for businesses and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange('products')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setShowWelcomeModal(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600">
              Comprehensive security and networking solutions tailored for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">Starting from</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onPageChange('products')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">
              Trusted brands powering our security and infrastructure solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <p className="font-semibold text-gray-800">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WelcomeModal 
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
      />
    </div>
  );
};

export default HomePage;