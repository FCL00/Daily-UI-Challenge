import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Header = () => {
  const [expand, setExpand] = useState(false);

  function expandHandler() {
    setExpand((prevState) => !prevState);
  }

  return (
    <header className="max-w-10xl shadow-xl">
      {/* navbar */}
      <nav className="relative container mx-auto p-5">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <a
              href="#"
              className="text-2xl font-bold text-yellow-500 hover:text-yellow-400"
            >
              Lutong Bahay
            </a>
          </div>
          {/*  menu */}
          <div className="hidden md:flex space-x-6 pt-2">
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
            <a href="" className="hover:text-yellow-500">
              Menu
            </a>
            <a href="" className="hover:text-yellow-500">
              Special Offer
            </a>
            <a href="" className="hover:text-yellow-500">
              Contact Us
            </a>
            <a href="" className="hover:text-yellow-500">
              About Us
            </a>
          </div>
          {/* button */}
          <a
            href=""
            className="hidden md:block p-3 px-6 pt-2 text-white bg-yellow-500 rounded-lg align-baseline hover:bg-yellow-400"
          >
            Login
          </a>
          <button onClick={expandHandler} className="block md:hidden px-6 pt-2">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
      <div
        className={`${
          expand ? "flex" : "hidden"
        } container md:hidden flex-col mx-auto px-5 py-5 space-y-2`}
      >
        <a href="" className="hover:text-yellow-500 ">
          Home
        </a>
        <a href="" className="hover:text-yellow-500 ">
          Menu
        </a>
        <a href="" className="hover:text-yellow-500 ">
          Special Offer
        </a>
        <a href="" className="hover:text-yellow-500 ">
          Contact Us
        </a>
        <a href="" className="hover:text-yellow-500 ">
          About Us
        </a>
      </div>
    </header>
  );
};

export default Header;
