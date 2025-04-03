import React from "react";
import { useNavigate } from "react-router-dom";
export default function App11() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center"}}>
      <h1>This is App11</h1>
      <button onClick={() => navigate("/app5")}>Go to App 5</button>
    </div>
  );
}
