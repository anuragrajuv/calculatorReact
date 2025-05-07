import React from "react";
import "./Calculator.css"; // Styles for the calculator UI
import { useDispatch, useSelector } from "react-redux";
import {
  inputDigit,
  inputDecimal,
  clear,
  toggleSign,
  percent,
  chooseOperator,
  evaluate,
} from "./calculatorSlice"; // Redux actions

const Calculator = () => {
  const dispatch = useDispatch();

  // Access the current input (display value) from the Redux store
  const display = useSelector((state) => state.calculator.currentInput);

  // Handles button clicks and dispatches the correct Redux action
  const handleClick = (btn) => {
    if (!isNaN(btn)) {
      // If the button is a number
      dispatch(inputDigit(btn));
    } else if (btn === ".") {
      dispatch(inputDecimal());
    } else if (btn === "C") {
      dispatch(clear());
    } else if (btn === "±") {
      dispatch(toggleSign());
    } else if (btn === "%") {
      dispatch(percent());
    } else if (["÷", "×", "−", "+"].includes(btn)) {
      dispatch(chooseOperator(btn));
    } else if (btn === "=") {
      dispatch(evaluate());
    }
  };

  // Layout of buttons in rows
  const buttons = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="calculator">
      {/* Display area to show current input or result */}
      <div className="display">{display}</div>

      {/* Render all calculator buttons */}
      <div className="buttons">
        {buttons.flat().map((btn, idx) => {
          // Style operator buttons differently
          const isOperator = ["÷", "×", "−", "+", "="].includes(btn);
          // Make "0" button wider
          const isZero = btn === "0";

          return (
            <button
              key={idx}
              className={`${isOperator ? "operator" : ""} ${isZero ? "zero" : ""}`}
              onClick={() => handleClick(btn)} // Call handleClick with button value
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
