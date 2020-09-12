import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Grid.css";

const Cards = React.lazy(() => import("../../../src/components/Cards"));

export default function grid() {
  return (
    <div className="container">
      <div className="item item--1 row-1 ">
        <div className="content">
          <h6> Don 't look further, here is the key </h6>{" "}
          <h1> We are the Solution </h1>{" "}
        </div>{" "}
      </div>
      <div className="item item--5 row-2 ">
        {" "}
        <div id="cards"> {<Cards />} </div>{" "}
      </div>
      <div className="item item--9 row-3 ">
        <h2 className="heading1">CUSTOMER REVIEW</h2>
        <div class="review">
          <h4>Fannie Rowe</h4>
          <p>
            Accessories Here you can find the best computer accessory for your
            laptop, monitor, printer, scanner, speaker. Here you can find the
            best computer accessory for your laptop, monitor, printer, scanner,
            speaker.
          </p>
        </div>
        <div class="review-1">
          <h4>Fannie Rowe</h4>
          <p>
            Accessories Here you can find the best computer accessory for your
            laptop, monitor, printer, scanner, speaker. Here you can find the
            best computer accessory for your laptop, monitor, printer, scanner,
            speaker.
          </p>
        </div>
      </div>
      <div className="item item--13 row-4 ">
        <h2 className="heading1">CONTACT US</h2>
        <div className="contact">
          <div class="contact-details">
            <h5>Delhi,India</h5>
            <p>56/8, Dwarka</p>
          </div>
          <div class="contact-details">
            <h5>00 (880) 9865 562</h5>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
