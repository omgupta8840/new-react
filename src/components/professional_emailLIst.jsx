import React from 'react';

function TechnologyUsersEmailList() {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/img/download.jpg)' }}>
      <div className="bg-black bg-opacity-60 p-10 lg:p-20 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6">
            TECHNOLOGY USERS EMAIL LIST
          </h1>
          <p className="text-lg mb-6">
            When it comes to reaching the right technology customers, use the most effective and accurate technology users email lists offered by Collabline Solutions LLC. With more than 5 million records of technology users around the globe, you can choose our Technology users mailing list to grow your possibilities of communicating with IT professionals and other key decision-makers.
          </p>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            GET A QUOTE
          </button>
        </div>

         {/* right Section */} 
        <div className="lg:w-1/3 bg-white bg-opacity-90  p-8 rounded-lg shadow-md mt-10 lg:mt-0">
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
    </div>
  );
}

export default TechnologyUsersEmailList;
