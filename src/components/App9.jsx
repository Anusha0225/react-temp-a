import React from "react";
import { useState, useRef } from "react";
export default function App9() {
  const [color, setColor] = useState();
  const txtRef = useRef();
  const handleSubmit = () => {
    txtRef.current.style.color = color;
  };
  return (
    <div>
      <center>
        <h1>This is App9</h1>
        <input type="text" onChange={(e) => setColor(e.target.value)}></input>
        <button onClick={handleSubmit}> Submit </button>
        <h1 ref={txtRef}> Hello World </h1>
      </center>
    </div>
  );
}
