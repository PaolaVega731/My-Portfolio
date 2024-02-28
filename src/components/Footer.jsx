
import {FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 lg:py-16 text-center">
      <div className="flex justify-center items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-2">
          <span className="text-gray-800 text-xl">C</span>
        </div>
        <p className="text-sm">Copyright 2023</p>
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/paola-vega-578093149/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
