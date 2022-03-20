import React from "react";
import "../../App.scss";
import "./Services.scss";

function Services() {
  return (
    <div>
      <div className="services-grid-container">
        <div className="moving-text">
          <marquee className="marquee1" direction="up" loop="infinite">OUR SERVICES</marquee>
        </div>
        <div className="moving-text2">
          <marquee className="marquee2" direction="up" loop="infinite">OUR SERVICES</marquee>
        </div>
      </div>
    </div>
  );
}

export default Services;
