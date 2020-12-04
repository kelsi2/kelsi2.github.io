import React from "react"
import '../App.css';
import {Link} from "react-router-dom";

export default function Home() {
  return (
  <>
    <div className="canvas">
      <div id="container">
          <h1 className="name">Kelsi <br/> Proulx</h1>
          <h1 className="title">Full Stack <br/> Web Developer</h1>
      </div>
      <span id="btn-container">
        <Link to="#" className="learn-more">
          Find out More
          <br/>
          <i className="fas fa-angle-double-right"></i>
        </Link>
      </span>
    </div>
  </>
  );
}