// home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 py-16">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          TRANSFORMING YOUR BUSINESS WITH
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          COMPREHENSIVE END-TO-END MARKETING AND SALES SOLUTIONS
        </h2>
        <p className="text-xl text-gray-600">
          Explore This Catalogue To Discover Customized Solution For Your B2b Marketing Challenge
        </p>
      </section>

      {/* Service Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {/* Healthcare Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="img/service-1.jpg" alt="Healthcare" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Healthcare</h3>
            <p className="text-gray-600 mb-4">
              Healthcare industry is growing at a tremendous rate, and the global healthcare spending is expected to reach $8.7 trillion.
            </p>
            <a href="#healthcare" className="text-blue-500 hover:text-blue-600 font-bold">READ MORE</a>
          </div>
        </div>

        {/* Technology Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="img/service-2.jpg" alt="Technology" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Technology</h3>
            <p className="text-gray-600 mb-4">
              Information Technology consumption is burgeoning at an astonishing rate. Concurrently, the number of IT solutions continues to grow.
            </p>
            <a href="#technology" className="text-blue-500 hover:text-blue-600 font-bold">READ MORE</a>
          </div>
        </div>

        {/* International Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="img/service-3.jpg" alt="International" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">International</h3>
            <p className="text-gray-600 mb-4">
              You need to be absolutely certain that you are well-connected and have strategically placed data partners across the world.
            </p>
            <a href="#international" className="text-blue-500 hover:text-blue-600 font-bold">READ MORE</a>
          </div>

        

        </div>

        {/* Industry Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="img/service-4.jpg" alt="Industry" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Industry</h3>
            <p className="text-gray-600 mb-4">
              Financial Services, Aerospace/Aviation Industry, Construction, Educational govt and private, Manufacturing, Chemical.
            </p>
            <a href="#industry" className="text-blue-500 hover:text-blue-600 font-bold">READ MORE</a>
          </div>
        </div>
      </section>
    
      <div className="flex flex-col items-center px-4 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">WHY CHOOSE US?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full mb-4">
            <span className="text-white text-lg font-bold">✓</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">FOR SALES TEAMS</h3>
          <p className="text-gray-600">Give practical insights to your sales teams with our B2B marketing data and connect with qualified professionals.</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full mb-4">
            <span className="text-white text-lg font-bold">✓</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">FOR MARKETING MANAGERS</h3>
          <p className="text-gray-600">Marketing Managers can use our data to roll out compelling marketing campaigns to drive engagement and conversions.</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full mb-4">
            <span className="text-white text-lg font-bold">✓</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">FOR RECRUITERS</h3>
          <p className="text-gray-600">Our multichannel B2B prospect data helps recruiters reach qualified specialists from various domains.</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mb-4">
            <span className="text-white text-lg font-bold">✓</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">FOR BUSINESS BUILDERS</h3>
          <p className="text-gray-600">As a Business Builder, you can use our B2B data to explore untapped markets and showcase your marketing inventory.</p>
        </div>
        
      </div>
    </div>

    <div className="flex flex-col items-center px-4 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">DRIVING MARKETING EXCELLENCE</h2>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        At Collabline Solutions, we aim to empower businesses with precise and complete contact data of their most valuable prospects. The highlights of B2B mailing data that we offer are:
      </p>
      
      <div className="w-full max-w-2xl space-y-4">
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-800">Data Authenticity</span>
            <span className="text-gray-800">100%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-gray-800 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-800">Data Accuracy</span>
            <span className="text-gray-800">95%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-gray-800 rounded" style={{ width: '95%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-800">Email Deliverability</span>
            <span className="text-gray-800">90%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-gray-800 rounded" style={{ width: '90%' }}></div>
          </div>
        </div>

      </div>
    </div>


    </div>
  );
};

export default Home;
