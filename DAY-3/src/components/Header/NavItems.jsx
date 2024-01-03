import React from "react";

const NavItem = ({ text, href, className }) => {
  return <a href={href}>{text}</a>;
};

export default NavItem;
