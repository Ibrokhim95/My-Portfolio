import React from "react";
import "./Intro.css";
import bg from "../../assets/elek.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div id="intro">
      <div className="container">
        <div className="introContent">
          <h1>I'm Ibrokhim Khamraev</h1>

          <h5>I'm Web Developer Based on Namangan City</h5>

          <Link to="portfolio" smooth={true} className="button">Portfolio</Link>
        </div>
        
        <div className="introBg">
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
