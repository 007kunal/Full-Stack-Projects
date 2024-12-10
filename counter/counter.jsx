import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ margin: "5px" }}>Increase</button>
      <button onClick={decrement} style={{ margin: "5px" }}>Decrease</button>
      <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
    </div>
  );
};

export default Counter;
