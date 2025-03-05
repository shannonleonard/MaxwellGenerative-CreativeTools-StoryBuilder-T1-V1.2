import React from "react";
import './index.css'; // Import CSS for Tailwind styles

console.log("App is rendering in production!");

function App() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#333",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ color: "#fff", fontSize: "3rem" }}>
        Debug: App is rendering!
      </h1>
    </div>
  );
}

export default App;
