import React from 'react';

function DataLicensingService() {
  return (
    <div className="p-8 lg:p-16">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        
        {/* Left Section */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-6">
            GIVE PRACTICAL INSIGHTS TO YOUR DATA WITH OUR DATA LICENSING SERVICE
          </h1>
          <p className="text-gray-700 mb-4">
            The premium B2B Data Licensing service from Collabline Solutions provides safe access to the most accurate data. Our Data Licensing opens the possibilities of reselling, adds verification processes while reducing data acquisition and retention expenses. As a data licensor, we address issues related to data maintenance, control, security policy, protocols and practices, especially where data is confidential, personal, financial, technical, or other information.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            BENEFITS OF OUR DATA LICENSING SERVICE
          </h2>
          <p className="text-gray-700 mb-4">
            Check out how our data licensing service benefits b2b marketers in different possible ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10">
            <li>Maximize the value of your b2b databases.</li>
            <li>Navigate and identify target markets through secure access.</li>
            <li>Flexibility in database management.</li>
            <li>Customizable data sets that suit your unique requirements.</li>
            <li>Renew or upgrade your license easily with few steps.</li>
            <li>Frequent quality checks provided by our team of data experts.</li>
            <li>Reach out to your customers on a large scale through data purchase option.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            WITH COLLABLINE SOLUTIONS DATA LICENSING PROCESS
          </h2>
          <p className="text-gray-700">
            At Collabline Solutions, we cover all the attributes which are required for flexible Data Licensing Service. At every stage of data licensing, we follow stringent processes to ensure compliance with the GDPR, CAN-SPAM laws, and other regulations. We facilitate b2b marketers with customized databases that cover names, job-title, company name, employee size, geographical locations, and more. Furthermore, we use multi-party levels to generate an extensive database that promotes your company’s products and services with scalable, customizable and trusted data.
          </p>
        </div>

        {/* Right Section - Related Services */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">RELATED SERVICES</h2>
          <div className="border rounded-lg p-4 bg-gray-100">
            <ul className="space-y-2 text-blue-600">
              <li className="hover:underline cursor-pointer">B2B Email Appending Services</li>
              <li className="hover:underline cursor-pointer">Data Appending Services</li>
              <li className="hover:underline cursor-pointer">Phone Appending Services</li>
              <li className="hover:underline cursor-pointer">Data Cleansing Services</li>
              <li className="hover:underline cursor-pointer">Data Licensing Services</li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="mt-10 flex justify-center">
            <img src="img/license.png" alt="Data Licensing" className="w-40 h-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataLicensingService;
