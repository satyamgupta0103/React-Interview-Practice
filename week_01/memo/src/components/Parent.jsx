import { useState } from "react";
import { Child } from "./Child";
import MemoizedChild from "./MemoizedChild";

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sumit");

  console.log("Parent Rendered!");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <button onClick={() => setName("Satyam")}>Change Name: {name}</button>
      {/* <Child name={name} /> */}
      <MemoizedChild name={name} />
    </div>
  );
}

export default Parent;
