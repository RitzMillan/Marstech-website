import React from "react";
import "../../App.scss";
import "./Services.scss";
import digitalsolution from "../../Assets/icons/digitalsolution.svg";
import experiencedesign from "../../Assets/icons/experiencedesign.svg";
import analytics from "../../Assets/icons/analytics.svg";
import strategic from "../../Assets/icons/strategic.svg";
import delivery from "../../Assets/icons/delivery.svg";
import seo from "../../Assets/icons/seo.svg";

function Services() {
  return (
    <div>
      <div className="services-grid-container">
        <div className="moving-text">
          <div className="marquee1" direction="up" loop="infinite">
            OUR SERVICES
          </div>
          <div className="marquee2" direction="up" loop="infinite">
            OUR SERVICES
          </div>
        </div>

        <div className="card-container1">
          <div className="card">
            <div className="title-container">
              <p>
                Digital
                <br />
                Solutions
              </p>
              <img src={digitalsolution} alt="digital"></img>
            </div>
            <div className="disc-container">
              <p>
                Create new capabilities and drive customer engagement through
                digital experiences. Our digital solutions drive innovation,
                disruption, and engender loyalty. We believe digital solutions
                are the foundation to a successful business strategy.
              </p>
            </div>
            <div className="title-accent">
              <h3>
                Digital
                <br />
                Solutions
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="title-container">
              <p>
                Strategic
                <br />
                Growth
              </p>
              <img src={strategic} alt="uiux"></img>
            </div>
            <div className="disc-container">
              <p>
                Define your north star and create the path to realize your
                business imperatives. We build strategies across all business
                and technology functions of your organization to improve and
                grow your business.
              </p>
            </div>
            <div className="title-accent">
              <h3>
                Strategic
                <br />
                Growth
              </h3>
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <div className="title-container">
              <p>
                Experience
                <br />
                Design
              </p>
              <img src={experiencedesign} alt="digital"></img>
            </div>
            <div className="disc-container">
              <p>
                Design is powerful. It determines how we experience life, and
                the way we connect, communicate, and learn. That’s why great
                design is about more than just beauty or delight. It’s about
                defining the collective future of businesses, customers, and
                employees.
              </p>
            </div>
            <div className="title-accent">
              <h3>
                Experience
                <br />
                Design
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="title-container">
              <p>
                Precise
                <br />
                Delivery
              </p>
              <img src={delivery} alt="digital"></img>
            </div>
            <div className="disc-container">
              <p>
                Enable agility, demand rigor, realize early and ongoing value
                focused on business outcomes. Our delivery excellence team is
                dedicated to understanding your current and future business
                needs while driving the execution and adoption of your most
                strategic, innovative initiatives.
              </p>
            </div>
            <div className="title-accent">
              <h3>
                Precise
                <br />
                Delivery
              </h3>
            </div>
          </div>
        </div>

        <div className="card-container3">
          <div className="card">
            <div className="title-container">
              <p>
                Statistical
                <br />
                Analytics
              </p>
              <img src={analytics} alt="digital"></img>
            </div>
            <div className="disc-container">
              <p>
                Accelerate business decisions and create true value through
                insights from inside and outside your organization. We help you
                cultivate an insights-driven culture focused on actions and
                business outcomes, enabled by modern data capabilities.
              </p>
            </div>
            <div className="title-accent">
              <h3>
                Statistical
                <br />
                Analytics
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="title-container">
              <p>
                SEO &#38;
                <br />
                Ranking
              </p>
              <img src={seo} alt="digital"></img>
            </div>
            <div className="disc-container">
              <p>
                We also provide SEO compatible development of your site or app,
                we will use all the relevant keywords which will help your
                business to rank better on Google.
              </p>
            </div>
            <div className="title-accent">
              <h3>
                SEO &#38;
                <br />
                Ranking
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
