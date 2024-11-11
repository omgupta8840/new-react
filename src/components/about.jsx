import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Us Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 uppercase">About Us</h2>
          <h3 className="text-4xl font-bold text-gray-800 mt-2">
            Welcome to Our <span className="text-blue-600">Collabline Solutions</span>
          </h3>
          <p className="text-xl font-semibold mt-4">What We Do</p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Collabline Solutions are dedicated to acknowledging the significant elements for
              client success, blending our skill across industries and business functions with our
              modern study. We solve business problems, take a consultative approach to every client
              engagement, and find actionable solutions that will help your organization achieve the
              best business outcomes. We know the importance of delivering the best customer experience
              and we enable your organization to exceed customer expectations.
            </p>
            <ul className="text-gray-700 list-disc ml-5 space-y-2">
              <li>Multi-Channel Marketing Data</li>
              <li>Customized Data Solutions</li>
              <li>Authentic Marketing Lists</li>
              <li>Affordable Mailing Lists</li>
              <li>Global Market Coverage</li>
              <li>Guaranteed Campaign Success</li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src="img/welcome.jpg"
              alt="Collabline Solutions"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Helping Mailing Solutions Section */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            Would You Like to See
          </h4>
          <h5 className="text-xl font-bold text-gray-800 mb-6">Helping Mailing Solutions</h5>
          <p className="text-gray-700 leading-relaxed">
            Collabline Solutions helps organizations achieve enterprise-wide total data quality
            by providing conventional mailing solutions and services around the world. We have built
            our reputation solving extremely tough data quality and mailing solutions problems and are
            today seen as highly reliable, competent and qualitatively superior by our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;