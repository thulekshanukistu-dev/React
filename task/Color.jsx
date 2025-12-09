import React, { useState } from "react";

export default function BoxWithButtons() {
  const [color, setColor] = useState("black");

 
  const colors = ["red", "green", "blue", "yellow", "purple"];

  return (
    
    <div style={{ textAlign: "center", marginTop: "50px" }}>
 
      <div
        style={{
          backgroundColor: color,
          height: "200px",
          width: "200px",
          margin: "0 auto 20px auto",
          borderRadius: "10px",
          border: "2px solid #000",
        }}
      ></div>


      <div>
        {colors.map((c, index) => (
          <button
            key={index}
            onClick={() => setColor(c)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
              backgroundColor: c,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
