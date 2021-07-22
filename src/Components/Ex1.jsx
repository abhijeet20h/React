import React, { useState, useEffect } from "react";

export default function Ex1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   setTimeout(() => {
      setCount(1);
    }, 1000);
  },[]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
  }