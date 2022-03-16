import "./App.scss";
import React, { useEffect, useState, useCallback, useRef } from "react";
import logo from './Assets/images/logo.png';
import {Howl, Howler} from 'howler';
import ambient from './Assets/sounds/WinterRestlessness.mp3'
import Landing from "./Components/Landing";

function App() {

  const amb = new Howl({
    src: [ambient],
    html5: true,
    volume: 0.5,
    onplay: function(){
      for(let i=1; i<=7; i++){
        document.querySelector(`#stroke${i}`).classList.add('stroke')
        document.querySelector(`#stroke${i}`).classList.remove('nostroke')
      }
    },
    onpause: function(){
      for(let i=1; i<=7; i++){
        document.querySelector(`#stroke${i}`).classList.add('nostroke')
        document.querySelector(`#stroke${i}`).classList.remove('stroke')
      }
    }
  });


  let aid;
  function handleEnter() {
    if(!amb.playing(aid) && !amb.playing()){
      aid = amb.play()
      console.log(aid,"if")
    }
    else if(amb.playing(aid)){
        amb.pause(aid);
      console.log(aid,"Pause(ID)")
    }
    else{
      console.log(aid,"else")
      amb.pause()
    }
  }

  return (
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

      <button className="enterButton" onClick={handleEnter}> Ready to Enter</button>
    </div>
  );
}

export default App;
