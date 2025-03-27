import React from "react";
import Main  from "./Main";
import { useState } from "react";

export default function App12() {
    const [page,setPage] = useState()
    return (
        <div>
            <h1>This is App12</h1>
            <button onClick={() => {setPage("a")}}>a</button>
            <button onClick={() => {setPage("b")}}>b</button>
            <Main c={page}/>
        </div>
    )
}