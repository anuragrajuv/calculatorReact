# Calculator App

This is a simple calculator application built using React and Redux Toolkit. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app is styled with CSS and uses Redux for state management.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear the current input or reset the calculator.
- Toggle between positive and negative numbers.
- Convert numbers to percentages.
- Supports decimal inputs.

## Project Structure

The project is organized as follows:

```
calculator/
  public/          # Static files
  src/
    app/          # Redux store configuration
    features/     # Feature-specific components and slices
      Calculator/ # Calculator component and Redux slice
    index.js      # Entry point of the application
    App.js        # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anuragrajuv/calculatorReact.git
   ```

2. Navigate to the project directory:
   ```bash
   cd calculator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Running Tests

To run the test suite, use:
```bash
npm test
```

### Building for Production

To create a production build, run:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Create React App Documentation](https://create-react-app.dev/)

## License

This project is licensed under the MIT License.
