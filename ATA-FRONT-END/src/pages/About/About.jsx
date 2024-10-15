import React from "react";
import "./About.css";
import course from "../../assets/Asset_5-removebg-preview.png";
import course2 from "../../assets/Asset_3-removebg-preview.png";
import course3 from "../../assets/Asset_2-removebg-preview.png";
import course4 from "../../assets/Asset_4-removebg-preview.png";

function About() {
  return (
    <div id="about">
      <section className="w-full py-20 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Impact</h2>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full">
          <div className="w-full md:w-1/4 flex justify-center mb-8 md:mb-0">
            <img 
              className="w-2/3 md:w-full max-w-xs object-contain" 
              src={course} 
              alt="lady with bag" 
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <p className="text-gray-600 text-lg">
              Akili Tech Africa has touched many lives through innovation, talent development, and
              creating impactful tech solutions across Africa.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              We believe in the power of technology to drive meaningful change, and we're making it happen every day.
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              className="w-2/3 md:w-full max-w-xs object-contain" 
              src={course2} 
              alt="man with bag"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gray-100 flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Ready to Innovate with Us?</h2>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full mb-8">
          <div className="w-full md:w-1/4 flex justify-center mb-8 md:mb-0">
            <img 
              className="w-2/3 md:w-full max-w-xs object-contain" 
              src={course3} 
              alt="Course 4 image" 
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <p className="text-gray-600 text-lg text-center max-w-3xl mb-6">
              Join Akili Tech Africa and be part of a vibrant community that values growth, innovation, and collaboration. Let's build the future together.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 self-center">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              className="w-2/3 md:w-full max-w-xs object-contain" 
              src={course4} 
              alt="Course 3 image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;