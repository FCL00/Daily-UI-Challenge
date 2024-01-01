import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [hide, setHide] = useState(true);

  const toggleVisibility = () => {
    setHide((prevState) => {
      return !prevState;
    });
  };

  return (
    <form className="form-container" action="">
      <div className="flex flex-col mb-4">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          className="input-text"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="input-text"
          type="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="flex flex-col mb-4 ">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            className="input-text w-full"
            type={hide ? "password" : "text"}
            placeholder="Min 8 chars"
            required
            min={8}
            max={25}
          />
          <FontAwesomeIcon
            className="absolute top-0 right-0 pt-6 px-3 text-gray-400"
            icon={hide ? faEyeSlash : faEye}
            onClick={toggleVisibility}
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-1">
        <div>
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="checkbox-input"
          />
          <label htmlFor="terms" className="checkbox-label">
            I agree to the
            <span>
              <a className="terms ms-1 text-violet-400" href="#">
                Terms & service
              </a>
            </span>
          </label>
        </div>
        <div>
          <a href="#" className="text-gray-500 hover:text-gray-400">
            forgot password?
          </a>
        </div>
      </div>
      <div className="mb-4">
        <button className="btnSubmit" type="submit">
          Register
        </button>
      </div>
      <div className="mb-4">
        <p className="text-center">
          Already a member? <span className="text-violet-400">Login</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
