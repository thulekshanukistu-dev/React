import React, { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        cursor: "pointer",
      }}
    >
      Tap / Click to Change Color
    </div>
  );
}
