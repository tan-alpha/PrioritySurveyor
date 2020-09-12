import React from "react";
import "./Home.css";
import grid from "./Grid";

const Header= React.lazy(()=>import("./Header/Header"));
const Grid= React.lazy(()=>import("./Grid"));
const Footer= React.lazy(()=> import("../../components/Footer"));

const Home =() => {
    return (
        <div>
            <div id="header">{<Header/>}</div>
            <div id="home">{<Grid/>}</div>
            <div id="footer">{<Footer/>}</div>
        </div>
    ) 
} 

export default Home;