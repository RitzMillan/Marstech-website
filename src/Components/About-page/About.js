import React from "react";
import "../../App.scss";
import "./About.scss";
import rishabh from "../../Assets/images/rishabh.png";

function About() {
  return (
    <div>
      <div className="about-grid-container">
        <div className="team-container">
          <div className="team">
            <div>
              <a href="https://instagram.com/ritzmillan" target="_blank" rel="noreferrer">
                <div className="tint"></div>
              </a>
              <img src={rishabh} alt="Designer" />
            </div>

            <div>
              <a href="https://instagram.com/ritzmillan" target="_blank" rel="noreferrer">
                <div className="tint"></div>
              </a>
              <img src={rishabh} alt="Designer" />
            </div>

            <div>
              <a href="https://instagram.com/ritzmillan" target="_blank" rel="noreferrer">
                <div className="tint"></div>
              </a>
              <img src={rishabh} alt="Designer" />
            </div>

            <div>
              <a href="https://instagram.com/ritzmillan" target="_blank" rel="noreferrer">
                <div className="tint"></div>
              </a>
              <img src={rishabh} alt="Designer" />
            </div>
            
          </div>
        </div>
        <div className="message-container">
          <div className="message">
            <h4>
              As an independent organization, we only take on projects that we
              truly <h2>believe</h2> in.
            </h4>
            <br />
            <br />
            <h4>
              It is our strong belief that the best <h2>results</h2> can only be
              achieved through working closely with the client.
            </h4>
            <br />
            <br />
            <br />
            <h4>
              We value openness in communication and willingness to accept{" "}
              <h2>new ideas</h2>.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
