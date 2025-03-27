import React from "react";
import { useState } from "react";
export default function App10() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <center>
        <h1>This is App10</h1>
        <p>
          <input type="number" onChange={(e) => setNum(e.target.value)}></input>
        </p>
        {num}
      </center>
    </div>
  );
}
