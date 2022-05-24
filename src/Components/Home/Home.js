import React from "react";
import "../../App.scss";
import "./Home.scss";
import hero1 from "../../Assets/images/hero1.svg";
import hero2 from "../../Assets/images/hero2.svg";
import ring0 from "../../Assets/icons/ring0.svg";
import ring1 from "../../Assets/icons/ring1.svg";
import ring2 from "../../Assets/icons/ring2.svg";
import ring3 from "../../Assets/icons/ring3.svg";
import beep from "../../Assets/sounds/beep.mp3";
import { Howl } from "howler";

function Home() {
  const bep = new Howl({
    src: [beep],
    volume: 0.02,
  });

  function handlebeep() {
    bep.play();
  }

  return (
    <div>
      <div className="home-grid-container">
        <ul className="social-nav hide">
          <li>
            <a
              href="https://www.linkedin.com/company/marstech-ltd/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-sound" onMouseOver={handlebeep}></div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.334 6.6665C14.6601 6.6665 15.9318 7.19329 16.8695 8.13097C17.8072 9.06865 18.334 10.3404 18.334 11.6665V17.4998H15.0007V11.6665C15.0007 11.2245 14.8251 10.8006 14.5125 10.488C14.1999 10.1754 13.776 9.99984 13.334 9.99984C12.892 9.99984 12.468 10.1754 12.1555 10.488C11.8429 10.8006 11.6673 11.2245 11.6673 11.6665V17.4998H8.33398V11.6665C8.33398 10.3404 8.86077 9.06865 9.79845 8.13097C10.7361 7.19329 12.0079 6.6665 13.334 6.6665V6.6665Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.99935 7.5H1.66602V17.5H4.99935V7.5Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33268 4.99984C4.25316 4.99984 4.99935 4.25365 4.99935 3.33317C4.99935 2.4127 4.25316 1.6665 3.33268 1.6665C2.41221 1.6665 1.66602 2.4127 1.66602 3.33317C1.66602 4.25365 2.41221 4.99984 3.33268 4.99984Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/explore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-sound" onMouseOver={handlebeep}></div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1673 2.50008C18.3693 3.06298 17.4857 3.4935 16.5507 3.77508C16.0488 3.198 15.3818 2.78899 14.6398 2.60335C13.8979 2.41771 13.1169 2.46441 12.4024 2.73712C11.6879 3.00984 11.0744 3.49541 10.6448 4.12818C10.2153 4.76094 9.9904 5.51036 10.0007 6.27508V7.10841C8.53618 7.14639 7.08505 6.82159 5.77649 6.16295C4.46794 5.50431 3.34258 4.53228 2.50065 3.33341C2.50065 3.33341 -0.832682 10.8334 6.66732 14.1667C4.95109 15.3317 2.90661 15.9159 0.833984 15.8334C8.33398 20.0001 17.5006 15.8334 17.5006 6.25008C17.4999 6.01796 17.4776 5.78641 17.434 5.55841C18.2845 4.71966 18.8847 3.66067 19.1673 2.50008V2.50008Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/marstech.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-sound" onMouseOver={handlebeep}></div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0007 1.6665H12.5007C11.3956 1.6665 10.3358 2.10549 9.55437 2.88689C8.77297 3.66829 8.33398 4.7281 8.33398 5.83317V8.33317H5.83398V11.6665H8.33398V18.3332H11.6673V11.6665H14.1673L15.0007 8.33317H11.6673V5.83317C11.6673 5.61216 11.7551 5.4002 11.9114 5.24392C12.0677 5.08763 12.2796 4.99984 12.5007 4.99984H15.0007V1.6665Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_marstech_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-sound" onMouseOver={handlebeep}></div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.166 1.6665H5.83268C3.5315 1.6665 1.66602 3.53198 1.66602 5.83317V14.1665C1.66602 16.4677 3.5315 18.3332 5.83268 18.3332H14.166C16.4672 18.3332 18.3327 16.4677 18.3327 14.1665V5.83317C18.3327 3.53198 16.4672 1.6665 14.166 1.6665Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3337 9.47525C13.4366 10.1688 13.3181 10.8771 12.9952 11.4994C12.6723 12.1218 12.1614 12.6264 11.5351 12.9416C10.9088 13.2569 10.1991 13.3666 9.5069 13.2552C8.81468 13.1438 8.17521 12.817 7.67944 12.3212C7.18367 11.8255 6.85685 11.186 6.74546 10.4938C6.63408 9.80155 6.74379 9.09183 7.05901 8.46556C7.37423 7.8393 7.8789 7.32837 8.50123 7.00545C9.12356 6.68254 9.83187 6.56407 10.5254 6.66692C11.2328 6.77182 11.8878 7.10147 12.3935 7.60717C12.8992 8.11288 13.2288 8.76782 13.3337 9.47525Z"
                  stroke="#3E4E89"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.584 5.4165H14.5927"
                  stroke="#3E4E89"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>

        <div className="rotating-mars-container hide">
          <img src={hero1} className="hero1" alt="marstech"></img>
          <div className="mars"></div>
          <img src={hero2} className="hero2" alt="marstech"></img>
          <img src={ring0} className="ring0 hide" alt="mars rings"></img>
          <img src={ring1} className="ring1 hide" alt="mars rings"></img>
          <img src={ring2} className="ring2 hide" alt="mars rings"></img>
          <img src={ring3} className="ring3 hide" alt="mars rings"></img>
          <div className="inst-text hide">
            <div className="scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </div>
            <p className="pcolor shine-txt">
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
