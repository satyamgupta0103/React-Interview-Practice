import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropParent from "./components/PropParent";
import { ThemeProvider } from "./context/ThemeContext";
import SiblingComponentA from "./components/SiblingComponentA";
import SiblingComponentB from "./components/SiblingComponentB";
import SiblingComponentC from "./components/SiblingComponentC";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* For prop drilling */}
      {/* <PropParent /> */}

      {/* For Context API */}
      <ThemeProvider>
        <SiblingComponentA />
        <SiblingComponentB />
        <SiblingComponentC />
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
