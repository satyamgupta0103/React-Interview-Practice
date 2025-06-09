import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
