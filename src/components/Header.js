import React from "react";
import Logo from "../assets/logo.svg";
import ResumePDF from "../resume.pdf";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}

          <button className="cursor-auto" href="#">
            <img src={Logo} alt="" />
          </button>
          {/* button */}
          <button class="transition duration-1000 ease-in-out bg-transparent hover:bg-transparent text-white-500 font-bold py-2 px-5 text-lg rounded-full">
            <svg
              class="inline-block w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <a href={ResumePDF} download="Resume">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
