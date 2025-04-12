import React from 'react';
import Layout from '../../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-primary">About RisePoint</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              RisePoint was founded in 2018 with a vision to transform how communities access resources for sustainable development. 
              What began as a small initiative to support local farmers has grown into a comprehensive platform addressing multiple 
              Sustainable Development Goals.
            </p>
            <p className="text-lg text-gray-700">
              Our journey has been one of continuous learning, adapting our approaches based on community feedback and measured outcomes. 
              Today, we reach thousands of beneficiaries across multiple regions, focusing on economic empowerment, 
              agricultural development, and education.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">Jane Doe</h3>
                <p className="text-gray-600 text-center mb-3">Founder & CEO</p>
                <p className="text-gray-700">
                  Jane brings over 15 years of experience in international development, with expertise in program design and implementation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">John Smith</h3>
                <p className="text-gray-600 text-center mb-3">Operations Director</p>
                <p className="text-gray-700">
                  John oversees our field operations, ensuring programs are delivered effectively and reach intended beneficiaries.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">Mary Johnson</h3>
                <p className="text-gray-600 text-center mb-3">Partnerships Manager</p>
                <p className="text-gray-700">
                  Mary develops and maintains our strategic partnerships with donors, governments, and implementing organizations.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Strategic Partners</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Partner Logo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Partner Logo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Partner Logo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Partner Logo</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About; 