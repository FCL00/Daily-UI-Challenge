import React from "react";
import Line from "@/components/partials/Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Summary = ({ className }) => {
  return (
    <div className={`p-5 shandow-lg ${className}`}>
      <h1 className="text-2xl font-bold">Summary</h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        magni sint quidem consequatur
      </p>
      <div className="flex justify-between mt-4">
        <p>Shipping</p>
        <p className="text-violet-500">$59.99</p>
      </div>
      <div className="flex justify-between mt-4">
        <p>Tax</p>
        <p className="text-violet-500">$5.00</p>
      </div>
      <div className="flex justify-between mt-4">
        <p>Insurance</p>
        <p className="text-violet-500">$12.00</p>
      </div>
      <hr className="flex-grow border-t mt-4 border-gray-500" />
      <div className="flex justify-between mt-4">
        <a href="#" className="text-violet-500 underline">
          Have a discount code?
        </a>
        <p className="text-2xl font-bold text-violet-500">$76.99</p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="w-1/2 p-2 text-white bg-violet-500 hover:bg-violet-600 rounded-sm">
          Next
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Summary;
