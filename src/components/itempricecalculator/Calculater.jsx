import { useState } from "react";

export default function CalculateTotal() {
  const [data, setData] = useState([
    { item: "Apple", price: 100, quantity: 1 },
    { item: "Banana", price: 60, quantity: 0 },
    { item: "Mango", price: 150, quantity: 1 },
    { item: "Orange", price: 80, quantity: 1 },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedData = [...data];
    updatedData[index].quantity = Number(newQuantity);
    setData(updatedData);
  };

  const calculateTotal = () => {
    return data.reduce((acc, val) => acc + val.price * val.quantity, 0);
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9d3ec, #c6e6fb)",
        minHeight: "100vh",
        padding: "40px",
        transition: "0.3s ease-in-out",
      }}
    >
      <h2
        style={{
          color: "#d63384",
          marginBottom: "25px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
        }}
      >
        Item Price Calculator
      </h2>

      <table
        style={{
          borderCollapse: "collapse",
          width: "70%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <thead
          style={{
            backgroundColor: "#d63384",
            color: "white",
            fontSize: "16px",
            textTransform: "uppercase",
          }}
        >
          <tr>
            <th style={{ padding: "15px" }}>Item</th>
            <th style={{ padding: "15px" }}>Price (LKR)</th>
            <th style={{ padding: "15px" }}>Quantity</th>
            <th style={{ padding: "15px" }}>Total (LKR)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, index) => (
            <tr
              key={index}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #eee",
                backgroundColor: index % 2 === 0 ? "#fafafa" : "#ffffff",
                transition: "background 0.3s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffe3f1";
                e.currentTarget.style.transform = "scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#fafafa" : "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <td style={{ padding: "14px", fontWeight: "500" }}>{val.item}</td>
              <td style={{ padding: "14px" }}>{val.price}</td>
              <td style={{ padding: "14px" }}>
                <input
                  type="number"
                  min="0"
                  value={val.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  style={{
                    width: "70px",
                    padding: "8px",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                    transition: "0.3s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "1px solid #d63384")
                  }
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </td>
              <td style={{ padding: "14px", fontWeight: "bold", color: "#444" }}>
                {val.price * val.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "35px",
          backgroundColor: "#198754",
          color: "white",
          padding: "15px 40px",
          borderRadius: "12px",
          fontSize: "20px",
          fontWeight: "600",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#157347";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#198754";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Total: LKR {calculateTotal()}
      </div>
    </div>
  );
}
