import "./App.scss";
import React, { useEffect, useState } from "react";

console.log("before app");
function tried() {
  console.log("inside app")
  const TIME_OUT = 600; // It should be the same transition time of the sections
  const body = document.querySelector("body");
  const sectionQty = document.querySelectorAll("section").length;
  const sectionStick = document.querySelector(".section-stick");

  const [startFlag, setStartFlag] = useState(true);
  const [initialScroll, setInitialScroll] = useState(0);
  const [qty, setQty] = useState(1);
  const [main, setMain] = useState(null);
  const [next, setNext] = useState(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    console.log("handleScroll called");
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    console.log("inside useEffect")
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      console.log("inside return of useEffect")
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Slide", qty);
  console.log("Scroll position", scrollPosition);
  console.log("ScrollY",window.scrollY);

  console.log("before window.scroll")
  window.onscroll = () => {
    console.log("inside window.scroll")
    if (startFlag) {
      console.log("inside if(startFlag)")
      const scrollDown = scrollPosition >= initialScroll;
      const scrollLimit = qty >= 1 && qty <= sectionQty;

      // Verify that the scroll does not exceed the number of sections
      if (scrollLimit) {
        console.log("inside if(scrollLimit)")
        body.style.overflowY = "hidden"; //lock scroll
        if (scrollDown && qty < sectionQty) {
          console.log("inside if(scrollDown)")
          setMain(document.querySelector("section.s"+qty).style.transform = "translateY(-100vh)");
          setNext(document.querySelector(`section.s${qty+1}`).style.transform = "translateY(0)");
          // main.style.transform = "translateY(-100vh)";
          // next.style.transform = "translateY(0)";
          console.log("main",main);
          console.log("next",next);
          setQty(qty + 1);
        } 
        else if (!scrollDown && qty > 1) {
          console.log("inside else if(scrollUp)")
          setMain(document.querySelector(`section.s${qty - 1}`).style.transform = "translateY(0)");
          setNext(document.querySelector("section.s"+qty).style.transform = "translateY(100vh)");
          // main.style.transform = "translateY(0)";
          // next.style.transform = "translateY(100vh)";
          setQty(qty - 1);
        }
        console.log("exiting if(scrollLimit)")
      }
      console.log("SLIDE", qty);
      console.log("Scroll position", scrollPosition);
      console.log("ScrollY",window.scrollY);

      // Wait for the scrolling to finish to reset the values
      setTimeout(() => {
        console.log("inside setTimeOut")
        setInitialScroll(scrollPosition);
        setStartFlag(true);
        body.style.overflowY = "scroll"; //Unlock scroll
      }, TIME_OUT);
      setStartFlag(false);
    }
    // Keep scrollbar in the middle of the viewport
    window.scroll(0, window.screen.height);
  };

  return (
    <div className="layout">
      <div className="section-stick">
        <div className="stick active"></div>
      </div>
      <section className="s1">Slide 1</section>

      <section className="s2">Slide 2</section>

      <section className="s3">Slide 3</section>

      <section className="s4">Slide 4</section>
    </div>
  );
}

export default tried;
