// footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="bg-yellow-400 text-center py-4">
        <h2 className="text-lg font-bold">
          READY TO BOOST YOUR SALES LIKE YOUR COMPETITORS?
        </h2>
        <h1 className="text-3xl font-bold mt-1">CONTACT US TODAY</h1>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
          GET A QUOTE
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 text-sm">
        <div>
          <p>
            Collabline Solutions is a leading B2B marketing service company — specialized in delivering quality databases at affordable prices. We help companies across all verticals to connect with their targeted customers.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">INFORMATION</h3>
          <ul>
            <li>
              <a href="#privacy-policy" className="text-blue-300 hover:text-blue-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#faq" className="text-blue-300 hover:text-blue-400">FAQ</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">SERVICES</h3>
          <ul>
            <li><a href="#technology" className="text-blue-300 hover:text-blue-400">Technology</a></li>
            <li><a href="#healthcare" className="text-blue-300 hover:text-blue-400">Healthcare</a></li>
            <li><a href="#industry" className="text-blue-300 hover:text-blue-400">Industry</a></li>
            <li><a href="#international" className="text-blue-300 hover:text-blue-400">International</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">ADDRESS</h3>
          <address className="not-italic">
            539 W. Commerce St #4681 Dallas,<br />
            TX 75208<br />
            Email: <a href="mailto:sales@collablinesolutions.com" className="text-blue-300 hover:text-blue-400">sales@collablinesolutions.com</a><br />
            Phone: +1 (469) 828-9408
          </address>
        </div>
      </div>
      
      <div className="border-t border-gray-700 py-4 text-center text-xs">
        <p>© Copyrights 2023 Collabline Data Solutions</p>
        <p>Powered by Hillborn Technologies Private Limited</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#facebook" className="text-blue-500 hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#linkedin" className="text-blue-500 hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#twitter" className="text-blue-500 hover:text-blue-400"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
