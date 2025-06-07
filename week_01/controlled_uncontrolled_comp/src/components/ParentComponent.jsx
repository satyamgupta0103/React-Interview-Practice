// ParentComponent.jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Controlled Component Example</h1>
      <ChildComponent value={inputValue} setValue={setInputValue} />
    </div>
  );
}

export default ParentComponent;
