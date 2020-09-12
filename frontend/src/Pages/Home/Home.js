import React from "react";
import "./Home.css";
import grid from "./Grid";

const Grid= React.lazy(()=>import("./Grid"));

const Home =() => {
    return (
        <div>
            <div id="home">{<Grid/>}</div>
        </div>
    )
}

export default Home;