import "../App.scss";
import React, { useEffect, useState, useCallback } from "react";
import logo from '../Assets/images/MarstechLogo.svg';
import { Howl } from 'howler';
import beep from '../Assets/sounds/beep.mp3'
import wosh from '../Assets/sounds/wosh2.wav'
import Home from "./Home/Home";
import Services from "./Services-page/Services";
import Products from "./Products-page/Products";

function Landing() {
  const TIME_OUT = 1000; // It should be the same transition time of the sections
  const sectionQty = document.querySelectorAll("section").length;
  const [qty, setQty] = useState(1);
  const [startFlag, setStartFlag] = useState(true);
  const [y, setY] = useState(window.scrollY);

  const bep = new Howl({
      src: [beep],
      volume: 0.1
      });

  const woh = new Howl({
      src: [wosh],
      volume: 0.6
  });

  const handleNavigation = useCallback(
    (e) => {
      if (startFlag) {
        console.log("in startFlag")
        const window = e.currentTarget;
        const scrollLimit = qty >= 1 && qty <= sectionQty;
        if (scrollLimit) {
          // body.style.overflowY = "hidden"; // Lock scroll
          
          if (y < window.scrollY && qty < sectionQty) {
            document.querySelector(`section.s${qty}`).style.transform = "translateY(-100vh)";
            document.querySelector(`section.s${qty + 1}`).style.transform = "translateY(0)";
            setTimeout(() => {
              setQty(qty + 1);
            },100);
          } else if (y > window.scrollY && qty > 1) {
            document.querySelector(`section.s${qty - 1}`).style.transform = "translateY(0)";
            document.querySelector(`section.s${qty}`).style.transform = "translateY(100vh)";
            setTimeout(() => {
              setQty(qty - 1);
            },100);
          }
        }
        setTimeout(() => {
          setY(window.scrollY);
          setStartFlag(true);
          // body.style.overflowY = "scroll"; // Unlock scroll
        }, TIME_OUT);
        setStartFlag(false);
      }
      window.scroll(0, window.screen.height)// Keep scrollbar in the middle of the viewport
    },
    [y, qty, startFlag, sectionQty]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleNav= (q) => {
    if(q < qty){
      console.log(q,"<",qty,"upwards")
      handlewoh();
      for(let i=qty; i>q; i--){
        document.querySelector(`section.s${i-1}`).style.transform = "translateY(0)";
        document.querySelector(`section.s${i}`).style.transform = "translateY(100vh)";
      }
      setQty(q)
    }
    else if(q > qty){
      console.log(q,">",qty,"downwards")
      handlewoh();
      for(let i=qty; i<q; i++){
        document.querySelector(`section.s${i}`).style.transform = "translateY(-100vh)";
        document.querySelector(`section.s${i+1}`).style.transform = "translateY(0)";
      }
      setQty(q)
    }
  }

  function handlebeep() {
    bep.play()
  }

  function handlewoh() {
    woh.play();
  }


  return (
    <div>
      <table className="top-nav">
        <tbody>
          <tr>
            <td>
              <div className={qty===2 ? "dotin" : "dotout"}></div>
            </td>
            <td>
              <div className={qty===3 ? "dotin" : "dotout"}></div>
            </td>
            <td>
              <div className={qty===4 ? "dotin" : "dotout"}></div>
            </td>
            <td rowSpan={2}>
              <button onClick={() => handleNav(1)}><img className="logo" src={logo} alt="Marstech logo"></img></button>
            </td>
            <td>
              <div className={qty===5 ? "dotin" : "dotout"}></div>
            </td>
            <td>
              <div className={qty===6 ? "dotin" : "dotout"}></div>
            </td>
            <td>
              <div className={qty===7 ? "dotin" : "dotout"}></div>
            </td>
          </tr>
          <tr>
            <td>
              <button className={qty===2 ? "acolor" : "pcolor"} onClick={() => handleNav(2)} onMouseOver={handlebeep} >S E R V I C E S</button>
            </td>
            <td>
              <button className={qty===3 ? "acolor" : "pcolor"} onClick={() => handleNav(3)} onMouseOver={handlebeep}>P R O D U C T S</button>
            </td>
            <td>
              <button className={qty===4 ? "acolor" : "pcolor"} onClick={() => handleNav(4)} onMouseOver={handlebeep}>B U Z Z</button>
            </td>
            <td>
              <button className={qty===5 ? "acolor" : "pcolor"} onClick={() => handleNav(5)} onMouseOver={handlebeep}>O V A T I O N S</button>
            </td>
            <td>
              <button className={qty===6 ? "acolor" : "pcolor"} onClick={() => handleNav(6)} onMouseOver={handlebeep}>A B O U T&nbsp;&nbsp;&nbsp;U S</button>
            </td>
            <td>
              <button className={qty===7 ? "acolor" : "pcolor"} onClick={() => handleNav(7)} onMouseOver={handlebeep}>C O N T A C T</button>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="side-nav">
        <li><button className={qty===1 ? "acolor" : "pcolor"} onClick={() => handleNav(1)} onMouseOver={handlebeep}>01</button></li>
        <li><button className={qty===2 ? "acolor" : "pcolor"} onClick={() => handleNav(2)} onMouseOver={handlebeep}>02</button></li>
        <li><button className={qty===3 ? "acolor" : "pcolor"} onClick={() => handleNav(3)} onMouseOver={handlebeep}>03</button></li>
        <li><button className={qty===4 ? "acolor" : "pcolor"} onClick={() => handleNav(4)} onMouseOver={handlebeep}>04</button></li>
        <li><button className={qty===5 ? "acolor" : "pcolor"} onClick={() => handleNav(5)} onMouseOver={handlebeep}>05</button></li>
        <li><button className={qty===6 ? "acolor" : "pcolor"} onClick={() => handleNav(6)} onMouseOver={handlebeep}>06</button></li>
        <li><button className={qty===7 ? "acolor" : "pcolor"} onClick={() => handleNav(7)} onMouseOver={handlebeep}>07</button></li>
      </ul>

      <div className="layout">
        <section className="s1"><Home /></section>

        <section className="s2"><Services /></section>

        <section className="s3"><Products /></section>

        <section className="s4">Slide 4</section>

        <section className="s5">Slide 5</section>

        <section className="s6">Slide 6</section>

        <section className="s7">Slide 7</section>
      </div>
    </div>
  );
}

export default Landing;
