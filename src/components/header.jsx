// header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className=" flex justify-between items-center bg-gray-900 p-4 text-white">
      <div className="flex items-center">
        <img src="img/lg2.png" alt="Collabline Solutions Logo" className="h-10 mr-3" />
        
     
      {/* <nav className="flex gap-8">
        <a href="#company" className="font-semibold hover:text-green-400">COMPANY</a>
        <a href="#solutions" className="font-semibold hover:text-green-400">SOLUTIONS</a>
        <a href="#services" className="font-semibold hover:text-green-400">SERVICES</a>
        <a href="#contact" className="font-semibold hover:text-green-400">CONTACT US</a>
      </nav> */}
     <div className="flex items-center gap-56">
     <h1 className="text-xl font-bold">
          COLLABLINE <span className="text-green-400 text-sm">SOLUTIONS</span>
        </h1>
      <ul className="  flex gap-8 font-semibold hover:text-green-400">
                            <li>
                                <NavLink
                                to="/aboutus"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-400 lg:p-0`
                                    }
                                >
                                    COMPANY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/solutions"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-400 lg:p-0`
                                    }
                                >
                                   SOLUTIONS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/services"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-400 lg:p-0`
                                    }
                                >
                                    SERVICES
                        
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contactus"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-400 lg:p-0`
                                    }
                                >
                                    CONTACT US
                        
                                </NavLink>
                            </li>


                           
            </ul >
            </div>
            </div>

    </header>
  );
};

export default Header;

// className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">