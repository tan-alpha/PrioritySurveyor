import React from "react";
import "./Home.css";
import grid from "./Grid";

const Header= React.lazy(()=>import("./Header/Header"));
const Grid= React.lazy(()=>import("./Grid"));

const Home =() => {
    return (
        <div>
            <div id="header">{<Header/>}</div>
            <div id="home">{<Grid/>}</div>
        </div>
    )
}

export default Home;