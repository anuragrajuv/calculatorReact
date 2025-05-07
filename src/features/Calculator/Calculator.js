import React from "react";
import "./Calculator.css";
import { useDispatch, useSelector } from "react-redux";
import {
  inputDigit,
  inputDecimal,
  clear,
  toggleSign,
  percent,
  chooseOperator,
  evaluate,
} from "./calculatorSlice";

const Calculator = () => {

  const dispatch = useDispatch();
  const display = useSelector((state) => state.calculator.currentInput);

  const handleClick = (btn) => {
    if (!isNaN(btn)) {
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

  const buttons = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];




  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.flat().map((btn, idx) => {
          const isOperator = ["÷", "×", "−", "+", "="].includes(btn);
          const isZero = btn === "0";

          return (
            <button
              key={idx}
              className={`${isOperator ? "operator" : ""} ${isZero ? "zero" : ""}`}
              onClick={() => handleClick(btn)}
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
