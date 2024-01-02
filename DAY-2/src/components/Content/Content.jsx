import React from "react";
import Shipping from "./Shipping";
import Summary from "./Summary";
const Content = () => {
  return (
    <div className="content-section container mx-auto mt-16 px-5 grid grid-cols-1 md:grid-cols-3 gap-1">
      <Shipping className="col-span-1 md:col-span-2" />
      <Summary className="col-span-1 md:col-span-1" />
    </div>
  );
};

export default Content;
