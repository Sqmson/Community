import React from 'react';
import Layout from '../../components/layout/Layout';

const Programs = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-primary">Our Programs</h1>
          <p className="text-lg text-gray-700 mb-8">
            RisePoint offers a range of development initiatives aligned with UN Sustainable Development Goals,
            focusing on economic empowerment, agricultural development, and education & skills training.
          </p>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              Economic Empowerment
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Business Incubation</h3>
                <p className="text-gray-700 mb-4">
                  Our business incubation program provides comprehensive support to emerging entrepreneurs,
                  including mentorship, seed funding, and operational guidance. The program focuses on 
                  sustainable business models that can create local jobs and address community needs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Entrepreneurship</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Business Development</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Mentorship</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                  Apply Now
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Microfinance Initiatives</h3>
                <p className="text-gray-700 mb-4">
                  Our microfinance program provides small loans and financial services to individuals
                  who lack access to traditional banking. These loans enable beneficiaries to start
                  or expand small businesses, improve housing, or invest in education.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Microloans</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Financial Inclusion</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Economic Growth</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              Agricultural Development
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Sustainable Farming Techniques</h3>
                <p className="text-gray-700 mb-4">
                  This program trains farmers in climate-smart agricultural practices, including soil
                  conservation, water management, and organic farming. Participants learn how to increase
                  yields while reducing environmental impact.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Organic Farming</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Climate Adaptation</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Sustainable Agriculture</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                  Join Program
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Market Access Facilitation</h3>
                <p className="text-gray-700 mb-4">
                  This initiative connects small-scale farmers with markets through cooperatives,
                  digital platforms, and supply chain improvements. We help farmers get fair prices
                  for their produce and establish reliable business relationships.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Market Linkages</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Value Chain Development</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Cooperative Formation</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                  Explore Opportunities
                </button>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              Education & Skills
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Digital Skills Training</h3>
                <p className="text-gray-700 mb-4">
                  Our digital literacy program equips participants with essential computer skills,
                  internet navigation, and online work capabilities. These skills open up new
                  employment opportunities in the digital economy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Computer Skills</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Internet Literacy</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Online Work</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                  Register for Training
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">Vocational Training</h3>
                <p className="text-gray-700 mb-4">
                  Our vocational training programs focus on in-demand trades such as construction,
                  plumbing, electrical work, tailoring, and culinary arts. These hands-on courses
                  combine technical skills with business knowledge.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Practical Skills</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Trade Certification</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Job Placement</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                  View Courses
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Programs; 