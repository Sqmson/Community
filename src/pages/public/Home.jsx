import React from 'react';
import Layout from '../../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-50">
        <section className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">RisePoint</h1>
            <p className="text-xl">Empowering communities through accessible tools, resources, and opportunities</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Empower communities through accessible tools, resources, and opportunities for sustainable development.
              Our focus areas include poverty eradication, economic empowerment, and community resilience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Strategic Goals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Economic Growth</h3>
                <p className="text-gray-700">Promoting sustainable economic development and poverty reduction.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Education & Skills</h3>
                <p className="text-gray-700">Enhancing access to quality education and skills development.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Community Resilience</h3>
                <p className="text-gray-700">Building stronger, more adaptive communities in the face of challenges.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">SDG Alignment</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our work aligns with the United Nations Sustainable Development Goals to create lasting impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* SDG icons/cards would go here */}
              <div className="bg-blue-100 p-4 rounded-lg text-center">SDG 1: No Poverty</div>
              <div className="bg-green-100 p-4 rounded-lg text-center">SDG 2: Zero Hunger</div>
              <div className="bg-red-100 p-4 rounded-lg text-center">SDG 3: Good Health</div>
              <div className="bg-yellow-100 p-4 rounded-lg text-center">SDG 4: Quality Education</div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Agricultural Innovation</h3>
                <p className="text-gray-700 mb-4">
                  How local farmers increased crop yields by 40% through sustainable farming techniques.
                </p>
                <button className="text-primary font-medium">Read More →</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Women's Entrepreneurship</h3>
                <p className="text-gray-700 mb-4">
                  Supporting women-led businesses to create jobs and transform local economies.
                </p>
                <button className="text-primary font-medium">Read More →</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 