import React from "react";

const Line = () => {
  return (
    <div className="flex my-4 space-x-3 items-center">
      <hr className="flex-grow border-t border-gray-500" />
      <span className="text-gray-500">or</span>
      <hr className="flex-grow border-t border-gray-500" />
    </div>
  );
};

export default Line;
