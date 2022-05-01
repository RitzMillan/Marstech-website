import "./App.scss";
import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import ambient from "./Assets/sounds/WinterRestlessness.mp3";
import Landing from "./Components/Landing";
import rotate from "./Assets/icons/rotate.svg";

function App() {


  const [device, setDevice] = useState(
    !!navigator.maxTouchPoints ? "mobile" : "computer"
  );

  const [orientation, setOrientation] = useState(
    !navigator.maxTouchPoints ? "desktop" : !window.screen.orientation.angle ? "portrait" : "landscape"
  );

  const amb = new Howl({
    src: [ambient],
    html5: true,
    volume: 0.5,
    onplay: function () {
      for (let i = 1; i <= 7; i++) {
        document.querySelector(`#stroke${i}`).classList.add("stroke");
        document.querySelector(`#stroke${i}`).classList.remove("nostroke");
      }
    },
    onpause: function () {
      for (let i = 1; i <= 7; i++) {
        document.querySelector(`#stroke${i}`).classList.add("nostroke");
        document.querySelector(`#stroke${i}`).classList.remove("stroke");
      }
    },
  });

  let aid;
  function handleEnter() {
    if (!amb.playing(aid) && !amb.playing()) {
      aid = amb.play();
      console.log(aid, "if");
    } else if (amb.playing(aid)) {
      amb.pause(aid);
      console.log(aid, "Pause(ID)");
    } else {
      console.log(aid, "else");
      amb.pause();
    }
  }

  function handleDetect() {
    setDevice(!!navigator.maxTouchPoints ? "mobile" : "computer");
    setOrientation(
      !navigator.maxTouchPoints
        ? "desktop"
        : !window.screen.orientation.angle
        ? "portrait"
        : "landscape"
    );
  }

  useEffect(() => {
    window.addEventListener("resize", handleDetect);

    return () => {
      window.addEventListener("resize", handleDetect);
    };
  }, []);

  

  return (
    <div>
    {((device==="mobile" && orientation==="landscape") || (device==="computer" && orientation==="desktop"))
    ?
    <div>
      <Landing />
      <div className="loader" onClick={handleEnter}>
        <span id="stroke1"></span>
        <span id="stroke2"></span>
        <span id="stroke3"></span>
        <span id="stroke4"></span>
        <span id="stroke5"></span>
        <span id="stroke6"></span>
        <span id="stroke7"></span>
      </div>

      <button className="enterButton" onClick={handleEnter}>
        Ready to Enter
      </button>
    </div>
    :
    <div className="device-overlay-container">
      <div className="rotation-overlay">
        <h3>Please rotate your device</h3>
        <img src={rotate} className="rotate-img" alt="rotate your device"></img>
        <h4 className="helper-text">This website is specifically<br/>designed for Desktop</h4>
      </div>
    </div>
    }
  </div>
  );
}

export default App;
