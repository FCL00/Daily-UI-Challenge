import React, { useState } from "react";
import "./App.css";
import Wrapper from "@/components/Wrapper/Wrapper";
import Screen from "@/components/Screen/Screen";
import ButtonBox from "@/components/ButtonBox/ButtonBox";
import Button from "@/components/Button/Button";

const btnValues = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["0", ".", "/", "="],
];

const App = () => {
  const [value, setValue] = useState("");

  function buttonValues(e) {
    setValue((prevValue) => prevValue + e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("Submit clicked");
  }

  return (
    <Wrapper>
      <h1 className="text-2xl text-gray-800 font-bold">React Calculator</h1>
      <form className="form-control" action="" onSubmit={onSubmitHandler}>
        <input
          className="screen"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly
        />
        <ButtonBox>
          {btnValues.flat().map((btn, index) => {
            return (
              <Button
                key={index}
                type={btn === "=" ? "submit" : "button"}
                className={
                  btn === "="
                    ? "operator"
                    : btn === "+"
                    ? "operator"
                    : btn === "-"
                    ? "operator"
                    : btn === "*"
                    ? "operator"
                    : btn === "."
                    ? "operator"
                    : btn === "/"
                    ? "operator"
                    : "button"
                }
                value={btn}
                action={buttonValues}
              />
            );
          })}
        </ButtonBox>
      </form>
    </Wrapper>
  );
};

export default App;
