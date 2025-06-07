import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert("A name was submitted" + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledComponent;
