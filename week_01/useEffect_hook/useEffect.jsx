//edge cases in useEffect
import { useState, useEffect } from "react";

//1. Infinite Loop
function infiniteLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log("Effect ran, count:", count);
  }, [count]);

  return <div>Count is {count}</div>;
}

//2. Stale Closures / Capturing Old State
function staleClosureComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount due to `[]`
    // It captures `count` as 0 from the initial render.
    const intervalId = setInterval(() => {
      console.log("Count is", count);
      // If we were to setCount(count + 1) here, it would always increment from 0
    }, 1000);
    // `count` here will always be 0!
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Missing `count` in dependencies
  // If you wanted to run this every time count changes, you'd add [count]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

//3. Forgetting Cleanup Functions (Memory Leaks, Unexpected Behavior)

function NoCleanupComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    //No cleanup function returned
    //It should return like below one

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>Window width: {width}</div>;
}

//4.Race Conditions with Asynchronous Operations

function RaceConditionComponent({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setUser(null); // Clear previous user data
    console.log(`Fetching user ${userId}...`);

    fetch(`/api/users/${userId}`) // Imagine this takes time
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [userId]); // If userId changes rapidly, previous fetches might still be pending

  if (loading) return <div>Loading user...</div>;
  if (!user) return <div>No user found.</div>;

  return <div>User: {user.name}</div>;
}

//5.Strict Mode Double Invocation

import React, { useEffect } from "react";

function StrictModeComponent() {
  useEffect(() => {
    console.log("Effect mounted!");
    return () => {
      console.log("Effect cleaned up!");
    };
  }, []); // Runs twice in Strict Mode development

  return <div>Check console in Strict Mode</div>;
}

//6.Over-optimizing / Incorrectly Memoizing Dependencies

import React, { useState, useEffect, useCallback } from "react";

function OverOptimizedComponent() {
  const [count, setCount] = useState(0);

  // This `logCount` function doesn't change `count`,
  // and the effect's only dependency is `logCount`
  // so useCallback here doesn't provide significant benefit unless
  // `logCount` was passed as a prop to a memoized child component.
  const logCount = useCallback(() => {
    console.log("Current count:", count);
  }, [count]); // It still depends on `count`

  useEffect(() => {
    logCount();
  }, [logCount]); // Effect re-runs every time count changes anyway

  return (
    <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
  );
}

//7. When NOT to Use useEffect
//a. Derived State:
//Bad example
function UserProfile({ firstName, lastName }) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return <div>{fullName}</div>;
}

// GOOD
function UserProfile({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`; // Derived directly
  return <div>{fullName}</div>;
}

//b. Directly Handling User Events
// BAD
function ButtonEffect() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      console.log("Button was clicked!");
      // Maybe reset `clicked` after some action
      setClicked(false);
    }
  }, [clicked]);
  return <button onClick={() => setClicked(true)}>Click Me</button>;
}

// GOOD
function ButtonHandler() {
  const handleClick = () => {
    console.log("Button was clicked!");
    // Perform action directly
  };
  return <button onClick={handleClick}>Click Me</button>;
}
