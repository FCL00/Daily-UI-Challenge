import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@/assets/avatar.jpg";
import Logo from "@/assets/logo.svg";
const Header = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  function displayMenu() {
    setExpandMenu((prevState) => {
      return !prevState;
    });
    console.log(expandMenu);
  }

  return (
    <header>
      <nav className="navbar container mx-auto p-5 text-white flex justify-between">
        <div className="left flex items-center space-x-5">
          <div className="nav-logo">
            <a href="">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="nav-link hidden  md:flex space-x-5">
            <a href="">Home</a>
            <a href="">Orders</a>
            <a href="">Tracking</a>
          </div>
        </div>
        <div className="right hidden md:flex items-center space-x-5">
          <div className="bell relative">
            <a href="#">
              <FontAwesomeIcon className="text-2xl" icon={faBell} />
            </a>
            <div className="absolute top-0 right-0 bg-red-600 p-1 rounded-full"></div>
          </div>
          <div className="avatar  flex items-center space-x-2">
            <img
              className="h-12 w-12 rounded-full object-fit"
              src={Avatar}
              alt=""
            />
            <button className="flex">
              Hi, Melisa
              <span>
                <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
              </span>
            </button>
            <div className="hidden"> drop down</div>
          </div>
        </div>
        <div className="menu-button md:hidden flex items-center">
          <FontAwesomeIcon onClick={displayMenu} icon={faBars} />{" "}
        </div>
      </nav>
      <div
        className={`container mx-auto md:hidden flex-col py-1 px-5 space-y-2 text-white transition duration-150 ${
          expandMenu ? "flex" : "hidden"
        }`}
      >
        <a className="p-2 rounded-md hover:bg-violet-300" href="#">
          Home
        </a>
        <a className="p-2 rounded-md hover:bg-violet-300" href="#">
          Order
        </a>
        <a className="p-2 rounded-md hover:bg-violet-300" href="#">
          Tracking
        </a>
        <a className="p-2 rounded-md hover:bg-violet-300" href="#">
          Notifications
        </a>
        <a className="p-2 rounded-md hover:bg-violet-300" href="#">
          Profile
        </a>
      </div>
    </header>
  );
};

export default Header;
