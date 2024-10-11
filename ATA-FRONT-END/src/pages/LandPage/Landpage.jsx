import React from 'react';
import course from '../../assets/Asset_1-removebg-preview.png';
import africanPrint from '../../assets/ATA 3.jpg';
import bgPattern from '../../assets/african_background.png'; // Add an African-inspired background image

function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center text-gray-800" 
    style={{
      
      backgroundColor:"#272d33",
    
     
    }}>
 <div className="absolute inset-0 bg-black opacity-30"></div> 
           
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center px-4 bg-black bg-opacity-30">
        {/* Floating Image Section */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex justify-end">
          <img
            className="w-2/3 h-auto object-cover rounded-l-full shadow-xl transform translate-x-16 translate-y-12"
            src={africanPrint}
            alt="Decorative design element"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-red-700 text-6xl font-extrabold mb-4 animate-fade-in">Be Connected, Be Innovative</h1>
          <p className="text-gray-300 text-lg md:text-2xl mb-6 max-w-3xl animate-fade-in">
            At Akili Tech Africa, we empower individuals to connect with tech opportunities,
            foster growth, and innovate to create impactful solutions.
          </p>
          <button className="mt-4 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
            Join the Movement
          </button>
        </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
