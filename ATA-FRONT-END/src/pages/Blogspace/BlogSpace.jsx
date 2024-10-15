import React from 'react';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

function Blogspace() {
  return (
    <div className='grid place-items-center mt-16'>
      <div className="w-[400px] mx-auto my-12 p-5 border-2 border-gray-300 rounded-lg text-center">
        <img className='w-24 h-24 rounded-full mb-5 object-cover' src={logo} alt="Blog Space Coming Soon" />
        <p className="text-lg mb-5">Exciting content is on its way!</p>
        <p className="text-lg mb-5">Stay tuned for our upcoming blog space.</p>
        <NavLink to="/" className="inline-block px-5 py-2 bg-blue-500 text-white rounded-md transition-colors duration-300 hover:bg-blue-700">
          Explore More
        </NavLink>
      </div>
    </div>
  );
}

export default Blogspace;
