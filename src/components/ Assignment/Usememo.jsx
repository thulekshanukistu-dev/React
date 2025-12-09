import React, { useState, useMemo } from "react";


const factorial = (n) => {
  console.log("Calculating factorial...");
  return n <= 0 ? 1 : n * factorial(n - 1);
};

export default function App() {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState("");


  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h1>Factorial of {number} is {fact}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}
