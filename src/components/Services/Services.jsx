import React from "react";
import { FaBriefcase, FaClone, FaTags, FaTv } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1>My Services</h1>

        <div className="serviceCards">
          <div className="serviceCard">
            <div className="ic">
                <FaTags className="icon"/>
            </div>
            <div>
              <h3>UI/UX Designer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                consectetur nihil ducimus repellat ipsum eius. Quidem sint
                maxime quasi alias?
              </p>
            </div>
          </div>
          <div className="serviceCard">
            <div className="ic">
                <FaBriefcase className="icon"/>
            </div>
            <div>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                consectetur nihil ducimus repellat ipsum eius. Quidem sint
                maxime quasi alias?
              </p>
            </div>
          </div>
          <div className="serviceCard">
            <div className="ic">
                <FaTv className="icon"/>
            </div>
            <div>
              <h3>Brend & Logo Design</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                consectetur nihil ducimus repellat ipsum eius. Quidem sint
                maxime quasi alias?
              </p>
            </div>
          </div>
          <div className="serviceCard">
            <div className="ic">
                <FaClone className="icon"/>
            </div>
            <div>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                consectetur nihil ducimus repellat ipsum eius. Quidem sint
                maxime quasi alias?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
