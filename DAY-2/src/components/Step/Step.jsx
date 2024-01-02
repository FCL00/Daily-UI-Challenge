import React from "react";
import Steps from "./Steps";

const Step = () => {
  return (
    <div className="container mx-auto p-2 mt-5 space-x-3 flex justify-center items-center">
      <Steps
        className="flex justify-center items-center   space-x-1 font-bold text-violet-500"
        icon={true}
        number=""
        step="Shipping"
      />
      <Steps
        className="hidden md:flex justify-center items-center  space-x-1 font-bold text-violet-500"
        icon={false}
        number="1"
        step="Personal Details"
      />
      <Steps
        className="hidden md:flex justify-center items-center  space-x-1 font-bold text-violet-500"
        icon={false}
        number="2"
        step="Payment"
      />
      <Steps
        className="hidden md:flex justify-center items-center  space-x-1 font-bold text-violet-500"
        icon={false}
        number="3"
        step="Confirmation"
      />
    </div>
  );
};

export default Step;
