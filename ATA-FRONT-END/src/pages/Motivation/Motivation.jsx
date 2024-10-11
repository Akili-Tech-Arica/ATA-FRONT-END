import React from 'react';
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";

function Motivation() {
  const videoId = '2-VKC8g2u1Y'; // Replace with video ID if needed
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="motivation" className="relative flex flex-col md:flex-row w-[94.8%] mx-auto my-12 bg-cover bg-center rounded-lg p-5 text-white" style={{ backgroundImage: `url('/src/assets/picture2.png')` }}>
      <img
        className="absolute bottom-4 left-0 w-20 h-40 object-cover opacity-75"
        src={sideImg}
        alt="Left Decoration"
      />
      <img
        className="absolute top-4 right-0 w-28 h-40 object-cover opacity-75"
        src={sideLeft}
        alt="Right Decoration"
      />
      
      <div className="flex-1">
      <iframe
          width="560"
          height="315"
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Motivation to Code"
        ></iframe>
      </div>
      
      <div className="flex-1 text-black">
        <p className="text-xl md:text-2xl leading-relaxed mb-5 font-normal font-sans">
          Coding opens doors to a world of creativity and problem-solving. It allows you to build the future and turn your ideas into reality. Don't be afraid to start, embrace the challenges, and enjoy the process of learning and creating!
        </p>
        <p className="italic text-2xl text-right text-black">
          "The best way to predict the future is to invent it." – Alan Kay
        </p>
      </div>
    </div>
  );
}

export default Motivation;
