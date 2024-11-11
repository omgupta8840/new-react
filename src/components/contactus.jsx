import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl font-bold mb-4">
          GET EXPERT ASSISTANCE FOR YOUR B2B DATA REQUIREMENTS THROUGH FEW CLICKS!
        </h1>
        <p className="text-lg mb-6">
          Have meaningful conversations by leveraging complete, accurate, and actionable contact data and intelligence.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Detailed Contact Data on Key Buying Roles, Including the CTO, CIO, CISO and More</li>
          <li>Direct Dial Numbers, Email Addresses, And Physical Locations of Targeted Prospects</li>
          <li>Real-Time Insights about the Companies Including Employee and Revenue Growth Rates</li>
          <li>Unlimited Access to the Highest Quality B2B Contact Data Available</li>
        </ul>
        <div className="mt-6">
          <p className="flex items-center mb-2">
            <span className="mr-2 text-blue-500">📍</span>
            539 W. Commerce St #4681 Dallas, TX 75208
          </p>
          <p className="flex items-center mb-2">
            <span className="mr-2 text-blue-500">📧</span>
            <a href="mailto:sales@collablinesolutions.com" className="text-blue-500">
              sales@collablinesolutions.com
            </a>
          </p>
          <p className="flex items-center mb-2">
            <span className="mr-2 text-blue-500">📞</span>
            +1 (469) 828-9408
          </p>
          <p className="flex items-center">
            <span className="mr-2 text-blue-500">📅</span>
            <span>Monday-Friday: 9:00 – 18:00 | Saturday: 11:00 – 17:00</span>
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700" htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="phone">Phone*</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="requirements">Requirements</label>
            <textarea
              id="requirements"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
