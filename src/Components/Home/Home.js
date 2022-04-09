import React from "react";
import "../../App.scss";
import "./Home.scss";
import hero1 from "../../Assets/images/hero1.svg";
import hero2 from "../../Assets/images/hero2.svg";
import ln from "../../Assets/icons/linkedin.svg";
import tw from "../../Assets/icons/twitter.svg";
import fb from "../../Assets/icons/facebook.svg";
import ig from "../../Assets/icons/insta.svg";
import ring0 from "../../Assets/icons/ring0.svg";
import ring1 from "../../Assets/icons/ring1.svg";
import ring2 from "../../Assets/icons/ring2.svg";
import ring3 from "../../Assets/icons/ring3.svg";
import beep from '../../Assets/sounds/beep.mp3'
import { Howl } from 'howler';

function Home() {

  const bep = new Howl({
    src: [beep],
    volume: 0.1
    });

    function handlebeep() {
      bep.play()
    }

  return (
    <div>
      <div className="home-grid-container">
        <ul className="social-nav">
          <li>
            <a href="https://www.linkedin.com/company/marstech-ltd/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src={ln} onMouseOver={handlebeep} alt="linkedin"></img></a>
          </li>
          <li>
            <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><img src={tw} onMouseOver={handlebeep} alt="twitter"></img></a>
          </li>
          <li>
            <a href="https://www.facebook.com/marstech.co.in/" target="_blank" rel="noopener noreferrer"><img src={fb} onMouseOver={handlebeep} alt="facebook"></img></a>
          </li>
          <li>
            <a href="https://www.instagram.com/_marstech_/" target="_blank" rel="noopener noreferrer"><img src={ig} onMouseOver={handlebeep} alt="instagram"></img></a>
          </li>
        </ul>

        <div className="rotating-mars-container">
          <img src={hero1} className="hero1" alt="marstech"></img>
          {/* <img src={mars} className="rotating-mars" alt="rotating mars"></img> */}
          <div id="mars"></div>
          <img src={hero2} className="hero2" alt="marstech"></img>
          <img src={ring0} className="ring0" alt="mars rings"></img>
          <img src={ring1} className="ring1" alt="mars rings"></img>
          <img src={ring2} className="ring2" alt="mars rings"></img>
          <img src={ring3} className="ring3" alt="mars rings"></img>
          <div className="inst-text">
            <div className="scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </div>
            <p className="pcolor">
              S C R O L L&nbsp;&nbsp;&nbsp;D O W N&nbsp;&nbsp;&nbsp;T
              O&nbsp;&nbsp;&nbsp;S E E&nbsp;&nbsp;&nbsp;W H A
              T&nbsp;&nbsp;&nbsp;W E&nbsp;&nbsp;&nbsp;D O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
