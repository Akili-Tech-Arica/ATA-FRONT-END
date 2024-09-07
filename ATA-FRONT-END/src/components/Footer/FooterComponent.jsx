import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-scroll";
import africa from "../../assets/Picture5.png";
import backgroundImage from "../../assets/Asset_4-removebg-preview.png";

const socialLinks = [
  { Icon: FaInstagram, href: "#", ariaLabel: "Instagram", color: "hover:text-pink-500" },
  { Icon: FaFacebook, href: "#", ariaLabel: "Facebook", color: "hover:text-blue-600" },
  { Icon: FaTwitter, href: "#", ariaLabel: "Twitter", color: "hover:text-blue-400" },
  { Icon: FaWhatsapp, href: "#", ariaLabel: "WhatsApp", color: "hover:text-green-500" },
];

const dynamicInfo = [
  "Welcome to AkiliTechAfrica!",
  "Stay updated with our latest courses",
  "Explore our coding, design, and marketing courses",
  "Join our community of tech enthusiasts",
  "Contact us for custom solutions",
];

function FooterComponent() {
  const [randomInfo, setRandomInfo] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomInfo(dynamicInfo[Math.floor(Math.random() * dynamicInfo.length)]);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const currentDate = new Date().getFullYear();

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
      <img
        src={africa}
        alt="Africa color"
        className="w-full h-20 object-cover"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="relative z-10 flex flex-col items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%',
          }}
        >
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-8 tracking-wide">
            Akili Tech Africa
          </h1>
          
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="contacts"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-orange-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative">Join Us</span>
          </Link>

          <div className="mt-12 flex space-x-6">
            {socialLinks.map(({ Icon, href, ariaLabel, color }) => (
              <a
                key={ariaLabel}
                href={href}
                className={`text-white ${color} transition duration-300 transform hover:scale-110`}
                aria-label={ariaLabel}
              >
                <Icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-blue-300 pt-8 text-center">
          <p className="text-white text-sm mb-2">
            &copy; {currentDate} AkiliTechAfrica. All rights reserved.
          </p>
          <p className="text-orange-300 text-sm italic animate-pulse">{randomInfo}</p>
        </div>
      </div>

      
      <div className="absolute top-20 left-0 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-0 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
}

export default FooterComponent;