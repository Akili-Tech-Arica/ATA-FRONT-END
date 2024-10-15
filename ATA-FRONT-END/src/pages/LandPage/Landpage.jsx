import React from 'react';
import africanPrint from '../../assets/ATA 3.jpg';
import manWithBook from '../../assets/Asset_1-removebg-preview.png'; // Make sure this path is correct

const LandingPage = () => {
  return (
    <div 
      className="bg-gray-50 min-h-screen flex flex-col items-center text-gray-800 relative"
      style={{
        backgroundColor: "#272d33",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <section className="relative w-full h-screen flex items-center justify-between px-4 bg-black bg-opacity-30">
        {/* Left side image */}
        <div className="absolute left-0 top-0 w-1/3 h-full flex items-center justify-start z-10">
          <img
            className="w-full h-auto object-cover object-center"
            src={manWithBook}
            alt="Man carrying a book"
          />
        </div>

        {/* Center content */}
        <div className="relative z-20 flex flex-col items-center text-center mx-auto">
          <h1 className="text-red-700 text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 animate-fade-in">Be Innovative</h1>
          <h1 className="text-blue-900 text-3xl md:text-4xl lg:text-5xl font-extrabold italic mb-2 animate-fade-in">Be Connected</h1>
          <h1 className="text-red-700 text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 animate-fade-in">Be Nurtured</h1>
          <p className="text-gray-300 text-lg md:text-2xl mb-6 max-w-3xl animate-fade-in">
            At Akili Tech Africa, we empower individuals to connect with tech opportunities,
            foster growth, and innovate to create impactful solutions.
          </p>
          <button className="mt-4 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
            Join the Movement
          </button>
        </div>

        {/* Right side image (unchanged) */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex justify-end">
          <img
            className="w-2/3 h-auto object-cover rounded-l-full shadow-xl transform translate-x-16 translate-y-12"
            src={africanPrint}
            alt="Decorative design element"
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;