import React, { useState, useEffect } from "react";
import coding from "../../assets/courses_coding.jpg";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";

function Trainers() {
  const trainerNames = [
    "Joseph Oluoch",
    "Angela Mwende",
    "Samuel Otieno",
    "Grace Wanjiku",
    "Michael Kimani",
    "Alice Njeri",
    "Diana Nyokabi",
    "Peter Njoroge",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trainersPerPage = 4; // Number of trainers to display at once

  // Automatically move to the next set of trainers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex + trainersPerPage >= trainerNames.length) {
      setCurrentIndex(0); // Go back to the first set when reaching the end
    } else {
      setCurrentIndex((prev) => prev + trainersPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(trainerNames.length - trainersPerPage); // Go to the last set
    } else {
      setCurrentIndex((prev) => prev - trainersPerPage);
    }
  };

  return (
    <div id="trainers" className="relative py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      <img className="absolute bottom-0 right-0 w-20 h-32 object-cover" src={sideLeft} alt="" />
      <h1 className="text-center text-3xl font-bold text-indigo-700 mb-10">Meet Our Trainers</h1>

      <div className="flex justify-center items-center space-x-4">
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-500 transition-all"
          onClick={handlePrev}
        >
          Prev
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {trainerNames.slice(currentIndex, currentIndex + trainersPerPage).map((name, idx) => (
            <div
              key={idx}
              className="relative bg-indigo-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-48 object-cover rounded-tl-lg border-b-8 border-yellow-500"
                src={coding}
                alt="trainers"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 p-4 rounded-b-lg flex justify-center items-center">
                <h3 className="text-white font-bold text-lg">{name}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-500 transition-all"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Trainers;
