import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ParentComponent /> */}
      <UncontrolledComponent />
    </>
  );
}

export default App;
