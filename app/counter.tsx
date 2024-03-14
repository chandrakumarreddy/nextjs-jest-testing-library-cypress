"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 data-testid="count-value">Count: {count}</h2>
      <button
        type="button"
        data-testid="increment"
        onClick={() => setCount(count + 1)}
      >
        inc
      </button>
      <button
        type="button"
        data-testid="decrement"
        onClick={() => setCount(count - 1)}
      >
        dec
      </button>
    </>
  );
}
