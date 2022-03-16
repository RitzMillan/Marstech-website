import "./App.scss";
import React, { useEffect, useState } from "react";

function App() {
  const TIME_OUT = 600; // It should be the same transition time of the sections
  const body = document.querySelector("body");
  const sectionQty = document.querySelectorAll("section").length;

  const [qty, setQty] = useState(1);

  const [initial, setInitial] = useState(0);

  const [startFlag, setStartFlag] = useState(true);

  const [down, setDown] = useState();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    console.log("handleScroll called");
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    // window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.onscroll = () => {
    console.log("scroll", scrollPosition);
    console.log("initial", initial);

    if (startFlag) {
      
      scrollPosition >= initial ? setDown(true) : setDown(false);

      const scrollLimit = qty >= 1 && qty <= sectionQty;

      if (scrollLimit){
        body.style.overflowY = "hidden"; //lock scroll
        console.log("bef qty",qty)
        if (!down && qty > 1) {
          console.log("********************executing Up");
          document.querySelector(`section.s${qty - 1}`).style.transform = "translateY(0)";
          document.querySelector("section.s" + qty).style.transform = "translateY(100vh)";
          setQty(qty - 1);
          console.log("aft qty",qty)
        } else if (down && qty < sectionQty) {
          console.log("********************executing Down");
          document.querySelector("section.s" + qty).style.transform = "translateY(-100vh)";
          document.querySelector(`section.s${qty + 1}`).style.transform = "translateY(0)";
          setQty(qty + 1);
          console.log("aft qty",qty)
        }
      }

      setTimeout(() => {
        setInitial(scrollPosition);
        setStartFlag(true);
        body.style.overflowY = "scroll"; //Unlock scroll
      }, TIME_OUT);
      setStartFlag(false);
    }
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
