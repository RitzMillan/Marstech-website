import React, { useState } from "react";
import "../../App.scss";
import "./Ovations.scss";
import ext from "../../Assets/icons/external.svg"
import cre from "../../Assets/images/cre.png";
import gepl from "../../Assets/images/gepl.png";
import alf from "../../Assets/images/alf.png";
import sust from "../../Assets/images/sus.png";

function Ovations() {
  const [creVisible, setCreVisible] = useState(false);
  const [geplVisible, setGeplVisible] = useState(false);
  const [alfVisible, setAlfVisible] = useState(false);
  const [susVisible, setSusVisible] = useState(false);

  return (
    <div>
      <div className="outer">
        <img
          src={gepl}
          alt="gepl"
          className={`gepl-pos ${geplVisible ? "viz" : "inviz"}`}
        />
        <img
          src={cre}
          alt="cre lab"
          className={`cre-pos ${creVisible ? "viz" : "inviz"}`}
        />
        <img
          src={alf}
          alt="laptop fix"
          className={`alf-pos ${alfVisible ? "viz" : "inviz"}`}
        />
        <img
          src={sust}
          alt="sustainida"
          className={`sust-pos ${susVisible ? "viz" : "inviz"}`}
        />
      </div>
      <div className="inner">
        <div className="strips">
          <div
            className="piece"
            onMouseEnter={() => setGeplVisible(true)}
            onMouseLeave={() => setGeplVisible(false)}
          >
            <h3>
              GEPL - Hong Kong
              <a
                href="https://marstechweb.github.io/geplab-website/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ext} className={geplVisible ? "viz" : "inviz"} alt="external link"></img>
              </a>
            </h3>
            <p>
              “Marstech have some very talented people who solved every problem
              with technology. I had been to many companies with my
              requirements, but most of them denied. But Marstech not only
              accepted the project but also completed it and handed over the
              exact requirements in no time. I definitely recommend them for
              your digital solutions.”
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="strips">
          <div
            className="piece"
            onMouseEnter={() => setCreVisible(true)}
            onMouseLeave={() => setCreVisible(false)}
          >
            <h3>
              CRE Lab - IIT Delhi
              <a
                href="https://web.iitd.ac.in/~kkpant/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ext} className={creVisible ? "viz" : "inviz"} alt="external link"></img>
              </a>
            </h3>
            <p>
              “Marstech's team has been very cooperative in terms of
              understanding our requirements and delivered the project as
              promised on time. The team members are very patient, talented
              enthusiastic, and quick. I recommend Marstech for the digital
              solutions and we are definitely very satisfied with their service
              and are very happy with the new website of our research group as
              designed by them ”
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="strips">
          <div
            className="piece"
            onMouseEnter={() => setSusVisible(true)}
            onMouseLeave={() => setSusVisible(false)}
          >
            <h3>
              Sustainida
              <a
                href="https://www.sustainida.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ext} className={susVisible ? "viz" : "inviz"} alt="external link"></img>
              </a>
            </h3>
            <p>
              “Marstech has been very quick on understanding the requirements
              and also fulfilling them. We have had quite a journey, from
              getting my website developed to becoming Technology partners with
              them. Today Martech has 100% Sustainida's software development
              projects and its been a very productive journey with them so far ”
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="strips">
          <div
            className="piece"
            onMouseEnter={() => setAlfVisible(true)}
            onMouseLeave={() => setAlfVisible(false)}
          >
            <h3>
              Any Laptop Fix
              <a
                href="https://www.anylaptopfix.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ext} className={alfVisible ? "viz" : "inviz"} alt="external link"></img>
              </a>
            </h3>
            <p>
              “Marstech have some very talented people who solved every problem
              with technology. I had been to many companies with my
              requirements, but most of them denied. But Marstech not only
              accepted the project but also completed it and handed over the
              exact requirements in no time. I definitely recommend them for
              your digital solutions.”
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="strips">
          <div className="piece">
            <h3>
              NPR
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ext} className={"inviz"} alt="external link"></img>
              </a>
            </h3>
            <p>
              “Marstech listened to our requirements and develop the Website
              according to our requirement. In the end, they delivered what we
              were expecting from them. They did a fantastic job and handed us a
              solution that meets our expectations. We would highly recommend
              them for their amazing services.”
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="strips">
          <div className="piece">
            <h3>
              VVB Sports
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ext} className={"inviz"} alt="external link"></img>
              </a>
            </h3>
            <p>
              “Marstech did a lightspeed job and delivered the project in the
              given deadlines. The Website met our expectations completely.
              Marstech have some really patient members who listened to my
              requirements very carefully and revised the features as many times
              as I asked.”
            </p>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Ovations;
