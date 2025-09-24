import React from 'react';

const PartnersPage: React.FC = () => {
  const strategicPartners = [
    {
      name: 'Deepsight Lab',
      description: 'Advanced AI-powered surveillance and analytics solutions',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Chubb Systems',
      description: 'Fire safety and security systems integration',
      image: 'https://images.pexels.com/photos/6266139/pexels-photo-6266139.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const certifiedPartners = [
    'Cisco', 'D-Link', 'Hikvision', 'Molex', 'TP-Link', 'Western Digital'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Technology Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative collaborations driving our core tech offerings and strategic partnerships 
            with leading technology manufacturers worldwide.
          </p>
        </div>

        {/* Strategic Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Strategic Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certified Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certified Partners</h2>
          <p className="text-center text-gray-600 mb-8">
            Official partnerships with leading technology manufacturers worldwide
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {certifiedPartners.map((partner, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 hover:bg-blue-50 h-20 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300">
                    <span className="font-bold text-gray-800 group-hover:text-blue-600 text-lg">
                      {partner}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Certified Partner</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-blue-100">
              Why our partnerships matter for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Latest Technology</h3>
              <p className="text-blue-100">
                Access to cutting-edge solutions and the latest product innovations from industry leaders.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-blue-100">
                Certified solutions that meet the highest industry standards for reliability and performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-blue-100">
                Comprehensive technical support backed by manufacturer expertise and warranties.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Expertise */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Expertise</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our partnerships enable us to provide seamlessly integrated solutions that combine the best 
                technologies from multiple vendors into cohesive, efficient systems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Multi-vendor system integration and compatibility</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Unified management platforms and interfaces</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Optimized performance and cost-effectiveness</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technology Integration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;