import React from "react";
import "./About.css";
import course from "../../assets/course.png";
import aboutImg from "../../assets/about_video.mp4";
function About() {
  return (
    <div id="about">
<section className="w-full py-20 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <div className="flex items-center justify-center">
            <img className="w-2/3 md:w-1/2 rounded-lg shadow-lg" src={course} alt="Impact Illustration" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 text-lg">
              Akili Tech Africa has touched many lives through innovation, talent development, and
              creating impactful tech solutions across Africa.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              We believe in the power of technology to drive meaningful change, and we’re making it happen every day.
            </p>
          </div>
        </div>
      </section>

    
      <section className="w-full py-20 bg-gray-100 flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Ready to Innovate with Us?</h2>
        <p className="text-gray-600 text-lg text-center max-w-3xl mb-6">
          Join Akili Tech Africa and be part of a vibrant community that values growth, innovation, and collaboration. Let's build the future together.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
      </section>
    </div>
    
  );
}

export default About;
