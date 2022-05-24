import "../App.scss";
import React, { useEffect, useState, useCallback } from "react";
import logo from '../Assets/images/MarstechLogo.svg';
import { Howl } from 'howler';
import beep from '../Assets/sounds/beep.mp3'
import wosh from '../Assets/sounds/wosh2.wav'
import Home from "./Home/Home";
import Services from "./Services-page/Services";
import Products from "./Products-page/Products";
import Buzz from "./Buzz-page/Buzz";
import Ovations from "./Ovations-page/Ovations";
import About from "./About-page/About";
import Contact from "./Contact-page/Contact";

function Landing() {
  const TIME_OUT = 1000; // It should be the same transition time of the sections
  const sections = document.querySelectorAll("section").length;
  const sectionQty = sections;
  const [qty, setQty] = useState(1);
  const [startFlag, setStartFlag] = useState(true);
  const [y, setY] = useState(window.scrollY);

  const [subqty, setSubQty] = useState(1);

  const bep = new Howl({
      src: [beep],
      volume: 0.02
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
          // document.body.style.overflowY = "hidden"; // Lock scroll
          
          if (y < window.scrollY && qty < sectionQty) {
            console.log("qty before if",qty)
            if(qty<3 || qty>4){
              console.log("qty inside if",qty)
              document.querySelector(`section.s${subqty}`).style.transform = "translateY(-100vh)";
              document.querySelector(`section.s${subqty + 1}`).style.transform = "translateY(0)";
            }
            setTimeout(() => {
              setQty(qty + 1);
              if(qty<3 || qty>4){
                setSubQty(subqty + 1)
                console.log(subqty)
              }
            },100);
          } else if (y > window.scrollY && qty > 1) {
            if(qty<=3 || qty>5){
              console.log("qty in elseif",qty)
              console.log("subqty in elseif",subqty)
              document.querySelector(`section.s${subqty - 1}`).style.transform = "translateY(0)";
              document.querySelector(`section.s${subqty}`).style.transform = "translateY(100vh)";
            }
            setTimeout(() => {
              setQty(qty - 1);
              if(qty<4 || qty>5){
                setSubQty(subqty - 1)
                console.log(subqty)
              }
            },100);
          }
        }
        setTimeout(() => {
          setY(window.scrollY);
          setStartFlag(true);
          // document.body.style.overflowY = "scroll"; // Unlock scroll
        }, TIME_OUT);
        setStartFlag(false);
      }
      window.scroll(0, window.screen.height)// Keep scrollbar in the middle of the viewport
    },
    [y, qty, subqty, startFlag, sectionQty]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  

  const handleNav= (q) => {
    if(q < subqty){
      console.log(q,"<",qty,"upwards")
      handlewoh();
      for(let i=subqty; i>q; i--){
        document.querySelector(`section.s${i-1}`).style.transform = "translateY(0)";
        document.querySelector(`section.s${i}`).style.transform = "translateY(100vh)";
      }
      // setQty(q)
      setSubQty(q)
    }
    else if(q > subqty){
      console.log(q,">",qty,"downwards")
      handlewoh();
      for(let i=subqty; i<q; i++){
        document.querySelector(`section.s${i}`).style.transform = "translateY(-100vh)";
        document.querySelector(`section.s${i+1}`).style.transform = "translateY(0)";
      }
      // setQty(q)
      setSubQty(q)
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
      <ul className="top-nav hide">
        <li className={subqty===2 ? "current" : ""}><button onClick={() => {handleNav(2); setQty(2)}} onMouseOver={handlebeep} >S E R V I C E S</button></li>
        <li className={subqty===3 ? "current" : ""}><button onClick={() => {handleNav(3); setQty(3)}} onMouseOver={handlebeep}>P R O D U C T S</button></li>
        <li className={subqty===4 ? "current" : ""}><button onClick={() => {handleNav(4); setQty(6)}} onMouseOver={handlebeep}>B U Z Z</button></li>
        <li><div onClick={() => {handleNav(1); setQty(1)}}><img className="logo" src={logo} alt="Marstech logo"></img></div></li>
        <li className={subqty===5 ? "current" : ""}><button onClick={() => {handleNav(5); setQty(7)}} onMouseOver={handlebeep}>O V A T I O N S</button></li>
        <li className={subqty===6 ? "current" : ""}><button onClick={() => {handleNav(6); setQty(8)}} onMouseOver={handlebeep}>A B O U T&nbsp;&nbsp;&nbsp;U S</button></li>
        <li className={subqty===7 ? "current" : ""}><button onClick={() => {handleNav(7); setQty(9)}} onMouseOver={handlebeep}>C O N T A C T</button></li>
      </ul>


      <ul className="page-number hide">
        <li className={subqty===1 ? "acolor" : "pcolor"}>01</li>
        <li className={subqty===2 ? "acolor" : "pcolor"}>02</li>
        <li className={subqty===3 ? "acolor" : "pcolor"}>03</li>
        <li className={subqty===4 ? "acolor" : "pcolor"}>04</li>
        <li className={subqty===5 ? "acolor" : "pcolor"}>05</li>
        <li className={subqty===6 ? "acolor" : "pcolor"}>06</li>
        <li className={subqty===7 ? "acolor" : "pcolor"}>07</li>
      </ul>

      <div className="layout">
        <section className="s1"><Home /></section>

        <section className="s2"><Services /></section>

        <section className="s3"><Products qty={qty}/></section>

        <section className="s4"><Buzz /></section>

        <section className="s5"><Ovations /></section>

        <section className="s6"><About /></section>

        <section className="s7"><Contact /></section>

        <section ></section>
        <section ></section>
      </div>
    </div>
  );
}

export default Landing;
