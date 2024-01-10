import React from "react";
import Logo from "@/assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faExpand,
  faShapes,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>Shoppy</span>
      </div>
      <div className="icons">
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faShapes} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faExpand} />
        </a>

        <div className="notification">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <span className="dot"></span>
        </div>
        <div className="user">
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>Jane</span>
        </div>
        <a href="">
          <FontAwesomeIcon className="icon" icon={faGear} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
