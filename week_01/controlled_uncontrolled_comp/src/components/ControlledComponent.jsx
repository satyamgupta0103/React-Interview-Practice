import { useState } from "react";

function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A name was submitted" + value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} value={value} />
        </label>
        <button type="submit">Submit</button>
        <p>{value}</p>
      </form>
    </div>
  );
}

export default ControlledComponent;
