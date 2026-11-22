"use client"; // Needed because we use useState and onClick.

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card row">
      <strong>Count: {count}</strong>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button className="secondary" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}