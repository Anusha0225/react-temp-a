import React from "react";
import { CiTextAlignCenter } from "react-icons/ci";
import { FaHome,FaAddressBook  } from "react-icons/fa";
export default function App15() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>This is App15</h1>
      <div>
        <FaHome size={15} />
        <label>Home</label>
      </div>
      <div>
        <FaAddressBook size={15}/>
        <label>Contact</label>
      </div>
    </div>
  );
}