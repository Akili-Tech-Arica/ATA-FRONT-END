import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/logo2.png";

function NavbarComponent() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollTo = () => {
    navigate("/");
    closeMenu();
  };

  return (
    <nav ref={navbarRef} className="bg-indigo-800 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
          <img src={logo} className="h-12 md:h-16" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Your Brand</span>
        </NavLink>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={navToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-indigo-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:bg-transparent md:p-0" aria-current="page" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <Link to="about" onClick={scrollTo} className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="courses" onClick={scrollTo} className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" smooth={true} duration={500}>Courses</Link>
            </li>
            <li>
              <Link to="contacts" onClick={scrollTo} className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" smooth={true} duration={500}>Contacts</Link>
            </li>
            <li>
              <Link to="services" onClick={scrollTo} className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" smooth={true} duration={500}>Services</Link>
            </li>
            <li>
              <NavLink to="/blogspace" className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" onClick={closeMenu}>Blogspace</NavLink>
            </li>
            <li>
              <Link to="motivation" onClick={scrollTo} className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" smooth={true} duration={500}>Motivation</Link>
            </li>
            <li>
              <Link to="trainers" onClick={scrollTo} className="block py-2 px-3 text-white hover:text-yellow-400 rounded md:p-0" smooth={true} duration={500}>Trainers</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;