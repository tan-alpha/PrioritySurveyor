import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./Grid.css";

const Cards= React.lazy(()=>import("../../../src/components/Cards"));

export default function grid(){
    return (
        <div className="container">
            <div className="item item--1 row-1 ">Company</div>
            
            <div className="item item--5 row-2 ">About us</div>
            
            <div className="item item--9 row-3 ">
            <p>Customer Reviews</p>
           <div id="cards">{<Cards/>}</div>


            </div>
            
            <div className="item item--13 row-4 ">Contact Us</div>
           
           
        </div>
    );
}