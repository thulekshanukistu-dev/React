import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button handleClick={increment} />
    </div>
  );
}
