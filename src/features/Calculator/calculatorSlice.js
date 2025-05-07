import { createSlice } from '@reduxjs/toolkit';

// ✅ Initial state of the calculator
const initialState = {
  currentInput: "0",      // What’s currently displayed on screen
  previousInput: null,    // Stored value for performing operations
  operator: null,         // Selected operator: +, −, ×, ÷...
  overwrite: false        // Whether the next input should replace currentInput
};

// ✅ Create the calculator slice
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    // Handle number button clicks (0–9)
    inputDigit: (state, action) => {
      if (state.overwrite) {
        // Replace the screen if an operation just finished
        state.currentInput = action.payload;
        state.overwrite = false;
      } else {
        // Append digit unless current is "0"
        state.currentInput = state.currentInput === "0"
          ? action.payload
          : state.currentInput + action.payload;
      }
    },

    // Handle the decimal (.) button
    inputDecimal: (state) => {
      if (!state.currentInput.includes(".")) {
        state.currentInput += ".";
      }
    },

    // Clear everything (reset calculator)
    clear: (state) => {
      return initialState;
    },

    // Toggle between positive/negative
    toggleSign: (state) => {
      state.currentInput =
        state.currentInput.charAt(0) === "-"
          ? state.currentInput.slice(1)
          : "-" + state.currentInput;
    },

    // Convert current input to percentage
    percent: (state) => {
      state.currentInput = (parseFloat(state.currentInput) / 100).toString();
    },

    // Choose an operator (e.g., +, −, ×, ÷)
    chooseOperator: (state, action) => {
      if (state.operator && !state.overwrite) {
        // If an operator already exists, perform calculation first
        const result = performCalculation(
          parseFloat(state.previousInput),
          parseFloat(state.currentInput),
          state.operator
        );
        state.previousInput = result.toString();
        state.currentInput = result.toString();
      } else {
        // Store current input as previous
        state.previousInput = state.currentInput;
      }

      state.operator = action.payload;
      state.overwrite = true;
    },

    // Perform the calculation (= button)
    evaluate: (state) => {
      if (state.operator && state.previousInput !== null) {
        const result = performCalculation(
          parseFloat(state.previousInput),
          parseFloat(state.currentInput),
          state.operator
        );
        state.currentInput = result.toString();
        state.previousInput = null;
        state.operator = null;
        state.overwrite = true;
      }
    }
  },
});

// ✅ Helper function to perform the math operations
function performCalculation(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b !== 0 ? a / b : "Error"; // Prevent divide-by-zero
    default: return b;
  }
}

// ✅ Export action creators for use in the UI
export const {
  inputDigit,
  inputDecimal,
  clear,
  toggleSign,
  percent,
  chooseOperator,
  evaluate
} = calculatorSlice.actions;

// ✅ Export the reducer to include in the Redux store
const calculatorReducer = calculatorSlice.reducer;
export default calculatorReducer;
