import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import Line from "./Line";
import Form from "./Form";

const Right = () => {
  return (
    <div className="right">
      <h1>Get Started Now</h1>
      <p>Enter your credentials to access your account</p>
      <div className="button-container">
        <button>
          <span>
            <FontAwesomeIcon className="me-2" icon={faGoogle} />
          </span>
          Google
        </button>
        <button>
          <span>
            <FontAwesomeIcon className="me-2" icon={faApple} />
          </span>
          Apple
        </button>
      </div>
      <Line />
      <Form />
    </div>
  );
};

export default Right;
