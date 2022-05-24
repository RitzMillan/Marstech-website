import "./App.scss";
import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import ambient from "./Assets/sounds/WinterRestlessness.mp3";
import Landing from "./Components/Landing";
import rotate from "./Assets/icons/rotate.svg";
import beep from '../src/Assets/sounds/beep.mp3'
import explosion from '../src/Assets/sounds/explosion.mp3'
import headphone from '../src/Assets/icons/headphone.svg'

import ReactHowler from "react-howler"; //trying

function App() {

  const [load, setLoad] = useState("loading");

  const [playing, setPlaying] = useState(false); //trying

  const playSound = () => {  //trying
    setPlaying(!playing);
  };

  const [device, setDevice] = useState(
    !!navigator.maxTouchPoints ? "mobile" : "computer"
  );

  const [orientation, setOrientation] = useState(
    !navigator.maxTouchPoints ? "desktop" : !window.screen.orientation.angle ? "portrait" : "landscape"
  );

  const exx = new Howl({
    src: [explosion],
    volume: 0.6
  });

  const bep = new Howl({
    src: [beep],
    volume: 0.02
    });

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

  function handleEnter() {
    document.querySelector('.loading-screen').remove()
    setTimeout(() =>{
      document.querySelector(".rotating-mars-container").classList.add("quick-unhide")
      playSound();
      exx.play();
    },1000);
    setTimeout(() =>{
      document.querySelector(".top-nav").classList.add("unhide")
      document.querySelector(".page-number").classList.add("unhide")
      document.querySelector(".social-nav").classList.add("unhide")
      document.querySelector(".sound-loader").classList.add("unhide")
      document.querySelector(".ring0").classList.add("unhide")
      document.querySelector(".ring1").classList.add("unhide")
      document.querySelector(".ring2").classList.add("unhide")
      document.querySelector(".ring3").classList.add("unhide")
    },3000);
    setTimeout(() =>{
      document.querySelector(".inst-text").classList.add("unhide")
      document.body.style.overflow = 'scroll'
    },4500);
  }

  function handlebeep() {
    bep.play()
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

  // For knowing the Type and Orentation of client device
  useEffect(() => {
    window.addEventListener("resize", handleDetect);
    return () => {
      window.addEventListener("resize", handleDetect);
    };
  }, []);


  // For displaying an overlay when the device display is in Potrait mode
  // useEffect(() => {
  //   if((device==="mobile" && orientation==="landscape") || (device==="computer" && orientation==="desktop")){
  //     // document.querySelector(".site-container").classList.remove("hide")
  //     // document.body.style.overflow = 'hidden';
  //     document.querySelector(".device-overlay-container").classList.add("move-out")
  //   }
  //   else{
  //     // document.querySelector(".site-container").classList.add("hide")
  //     document.querySelector(".device-overlay-container").classList.remove("move-out")
  //   }
  // }, [orientation, device])
  

  // To stop the scrolling until App is completely loaded on client side
  useEffect(() => {
    if(load==="loading" || orientation==="portrait")
    {document.body.style.overflow = 'hidden'}
    else
    {
      document.body.style.overflow = 'scroll'
    }
  }, [load,orientation])

  // For knowing when the app has been loaded on client side
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      setLoad("loaded");
    }
  }

  return (
  <div>

    <div className="site-container">
      <div className="loading-screen">
        <div className="orbiting">
          <div className="ring">
            <div className="orb"></div>
          </div>
        </div>
        <div className="circle"></div>
        {
          load==="loaded" && 
            <button className="enterButton" onClick={handleEnter}>E N T E R</button>
        }
        {
          load==="loaded" && 
          <div className="adv-txt">
            <img src={headphone} alt="sound"></img>
            <p className="pcolor pos shine-txt">
            T U R N&nbsp;&nbsp;&nbsp;O N&nbsp;&nbsp;&nbsp;S O U N D
            &nbsp;&nbsp;&nbsp;F O R&nbsp;&nbsp;&nbsp;B E S T&nbsp;&nbsp;&nbsp;E X P E R I E N C E
            </p>
          </div>
        }
      </div>
      <Landing />      
      <div className="sound-loader hide" onClick={playSound}>
        <div className="bgbeep" onMouseOver={handlebeep}></div>
        <span id="stroke0"></span>
        <span id="stroke1"></span>
        <span id="stroke2"></span>
        <span id="stroke3"></span>
        <span id="stroke4"></span>
        <span id="stroke5"></span>
        <span id="stroke6"></span>
      </div>
      <ReactHowler 
      playing={playing} 
      src={[ambient]} 
      volume={0.5}
      loop={true}
      onPlay={() => {
        for (let i = 0; i < 7; i++) {
          document.querySelector(`#stroke${i}`).classList.add("stroke");
          document.querySelector(`#stroke${i}`).classList.remove("nostroke");
        }
      }} 
      onPause={() => {
        for (let i = 0; i < 7; i++) {
          document.querySelector(`#stroke${i}`).classList.add("nostroke");
          document.querySelector(`#stroke${i}`).classList.remove("stroke");
        }
      }}
      /> {/* trying */}
    </div>
    
    <div className="device-overlay-container">
      <div className="rotation-overlay">
        <h3>Please rotate your device</h3>
        <img src={rotate} className="rotate-img" alt="rotate your device"></img>
        <h4 className="helper-text">This website is specifically<br/>designed for Desktop</h4>
      </div>
    </div>
    

  </div>
  );
}

export default App;



  // let aid;
  // const [aid, setAid] = useState();
  
  // function handleBgSound() {
  //   if (!amb.playing(aid) && !amb.playing()) {
  //     const aid1 = amb.play();
  //     // console.log("aid",aid)
  //     // console.log("aid1",aid1)
  //     setAid(aid1)
  //     // console.log("aid",aid)
  //     // console.log("aid1",aid1)
  //     console.log(aid, "if");
  //   } else if (amb.playing(aid)) {
  //     amb.pause(aid);
  //     console.log(aid, "Pause(ID)");
  //   } else {
  //     console.log(aid, "else");
  //     amb.pause();
  //   }
  // }