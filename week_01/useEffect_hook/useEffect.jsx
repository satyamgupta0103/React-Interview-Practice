import { useState, useEffect } from "react";

//Infinite Loop
function infiniteLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log("Effect ran, count:", count);
  }, [count]);
}

return <div>Count is {count}</div>;
