import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Steps = ({ className, icon, step, number }) => {
  return (
    <div className={className}>
      {icon ? (
        <FontAwesomeIcon
          className="rounded-full bg-violet-500 text-white p-1"
          icon={faCircleCheck}
        />
      ) : (
        <div className="rounded-full bg-violet-500 px-2 text-white">
          {number}
        </div>
      )}

      <p>{step}</p>
    </div>
  );
};

export default Steps;
