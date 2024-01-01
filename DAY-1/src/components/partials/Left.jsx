import React from "react";
import background from "src/assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faHatWizard } from "@fortawesome/free-solid-svg-icons";
const Left = () => {
  return (
    <div className="left" style={{ background: `url(${background})` }}>
      <div className="left-content">
        <h1>
          <span>
            <FontAwesomeIcon className="me-1" icon={faHatWizard} />
          </span>
          Code Quest
        </h1>
        <h3>
          A gamified learning experience with levels, challenges, and rewards
        </h3>
        <div className="w-[13rem] p-2 text-white font-medium bg-[#121212] rounded-full text-center">
          <a
            href="https://www.youtube.com/watch?v=uTuuz__8gUM&t=4953s"
            target="blank"
            className="flex items-center hover:text-violet-400"
          >
            <span className="me-5 text-5xl ">
              <FontAwesomeIcon icon={faCirclePlay} />
            </span>
            Watch Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
