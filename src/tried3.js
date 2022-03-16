import "./App.scss";
import React, { useEffect, useState } from "react";

function App() {
  const TIME_OUT = 600; // It should be the same transition time of the sections
  const body = document.querySelector("body");
  const sectionQty = document.querySelectorAll("section").length;

  const [qty, setQty] = useState(1);

  const [initial, setInitial] = useState(0);

  const [startFlag, setStartFlag] = useState(true);

  const [down, setDown] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  


  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    console.log("handleScroll called");
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleDirection = () => {
    scrollPosition >= initial ? handleDown(true) : handleDown(false);
  }

  const handleDown = (e) => {
    setDown(e)
  }

  const handleInitial = (e) => {
    setInitial(e);
  }

  const handleUpExc = () => {
    console.log("********************executing Up");
    document.querySelector(`section.s${qty - 1}`).style.transform = "translateY(0)";
    document.querySelector(`section.s${qty}`).style.transform = "translateY(100vh)";
    setQty(qty - 1);
    handleInitial(scrollPosition);
  }

  const handleDownExc = () => {
    console.log("********************executing Down");
    document.querySelector(`section.s${qty}`).style.transform = "translateY(-100vh)";
    document.querySelector(`section.s${qty + 1}`).style.transform = "translateY(0)";
    setQty(qty + 1);
    handleInitial(scrollPosition);
  }

  // +++++++++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    window.addEventListener("scroll", (e) => {

      if(startFlag){
        setDown(e.scrollY >= initial);
        const scrollLimit = qty >= 1 && qty <= sectionQty;
        console.log(e.scrollY)
        if(scrollLimit){
          body.style.overflowY = 'hidden' // Lock el scroll

          if(down && qty < sectionQty){
            document.querySelector(`section.s${qty}`).style.transform = "translateY(-100vh)";
            document.querySelector(`section.s${qty + 1}`).style.transform = "translateY(0)";
            setQty(qty + 1);
          }
          else if(!down && qty > 1){
            document.querySelector(`section.s${qty - 1}`).style.transform = "translateY(0)";
            document.querySelector(`section.s${qty}`).style.transform = "translateY(100vh)";
            setQty(qty - 1);
          }
        }
        setTimeout(() => {
          setInitial(e.scrollY);
          setStartFlag(true);
          body.style.overflowY = 'scroll' // Unlock scroll
        },TIME_OUT);

        setStartFlag(false)
      }
      window.scroll(0, window.screen.height)

    }, { passive: true });

    return () => {
      window.removeEventListener("scroll");
    }
},[]);

  // +++++++++++++++++++++++++++++++++++++++++++++++



  window.onscroll = () => {
    handleDirection();

    setTimeout(() => {
    handleDirection();
    if (startFlag) {
      const scrollLimit = qty >= 1 && qty <= sectionQty;
      if (scrollLimit){
        body.style.overflowY = "hidden"; //lock scroll
        if (!down && qty > 1) {
          handleUpExc();
        } else if (down && qty < sectionQty) {
          handleDownExc();
        }
      }
      // setTimeout(() => {
        setStartFlag(true);
        body.style.overflowY = "scroll"; //Unlock scroll
      // }, TIME_OUT);
    }
  }, TIME_OUT);
  setStartFlag(false);
  // Keep scrollbar in the middle of the viewport
  // window.scroll(0, window.screen.height)
  };
  console.log("scroll position", scrollPosition);
  console.log("initial", initial);

  return (
    <div className="layout">
      <section className="s1">Slide 1</section>

      <section className="s2">Slide 2</section>

      <section className="s3">Slide 3</section>

      <section className="s4">Slide 4</section>
    </div>
  );
}

export default App;
