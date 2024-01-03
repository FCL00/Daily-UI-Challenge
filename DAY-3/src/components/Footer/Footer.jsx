import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="container mx-auto p-6">
      <div className="container flex flex-col md:flex-row justify-between items-center align-baseline mb-2">
        <h1 className="text-xl font-bold text-yellow-500 hover:text-yellow-500">
          LutongBahay
        </h1>
        <div className="space-x-6">
          <a href="" className="hover:text-yellow-500">
            About Us
          </a>
          <a href="" className="hover:text-yellow-500">
            Privacy Policy
          </a>
          <a href="" className="hover:text-yellow-500">
            Licensing
          </a>
          <a href="" className="hover:text-yellow-500">
            Contact
          </a>
          <a href="" className="hover:text-yellow-500">
            FAQ's
          </a>
        </div>
      </div>
      <hr className="border-none bg-stone-900 h-px" />
      <div className="text-center mt-1">
        <p>&copy;{Year} LutongBahay. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
