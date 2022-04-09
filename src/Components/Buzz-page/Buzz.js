import React from "react";
import "../../App.scss";
import "./Buzz.scss";
import BlogCard from "./BlogCard";

function Buzz() {

  const handleLarrow = () => {
    console.log("im left")
    document.querySelector(`.inner-lower`).scrollBy(300, 0);
  } 

  const handleRarrow = () => {
    console.log("im right")
    document.querySelector(`.inner-lower`).scrollBy(-300, 0);
  } 



  return (
    <div>
      <div className="upper">
        <div className="inner-upper">
          <div className="buzz-text1">
            <div className="marquee1">BLOG POSTS</div>
            <div className="marquee2">BLOG POSTS</div>
          </div>
          <div className="buzz-text2">
            <div className="marquee1">WHAT THE BUZZ IS ALL ABOUT</div>
            <div className="marquee2">WHAT THE BUZZ IS ALL ABOUT</div>
          </div>
        </div>
      </div>

      <div className="buzz-grid-container">
        <div className="buzz-controls">
          <button className="abutton" onClick={handleLarrow}>
            <svg
              style={{ transform: "rotate(180deg)", paddingBottom: "3px" }}
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
                fill="#01102E"
              />
            </svg>
          </button>
          <button className="abutton" onClick={handleRarrow}>
            <svg
              style={{ paddingTop: "3px" }}
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
                fill="#01102E"
              />
            </svg>
          </button>
        </div>
        <div className="lower">
          <div className="inner-lower">

            <BlogCard />

            <a href="https://www.marstech.co.in/images/Programming.svg" target="_blank" rel="noopener noreferrer">
            <div className="blog-card">
              <div className="content">
                <div>
                  <h3>04</h3>
                  <p>Junaid Saah | October 3, 2020</p>
                  <h4>A Call Towards Sustainability</h4>
                </div>
                <img
                  src="https://www.marstech.co.in/images/Programming.svg"
                  className="thumbnail"
                  alt="blog thumbnail"
                />
              </div>
              <div className="divider" />
            </div>
            </a>

            <div className="blog-card">
              <div className="content">
                <div>
                  <h3>03</h3>
                  <p>Junaid Saah | October 3, 2020</p>
                  <h4>A Call Towards Sustainability</h4>
                </div>
                <img
                  src="https://www.marstech.co.in/images/Programming.svg"
                  className="thumbnail"
                  alt="blog thumbnail"
                />
              </div>
              <div className="divider" />
            </div>

            <div className="blog-card">
              <div className="content">
                <div>
                  <h3>02</h3>
                  <p>Junaid Saah | October 3, 2020</p>
                  <h4>A Call Towards Sustainability</h4>
                </div>
                <img
                  src="https://www.marstech.co.in/images/Programming.svg"
                  className="thumbnail"
                  alt="blog thumbnail"
                />
              </div>
              <div className="divider" />
            </div>

            <div className="blog-card">
              <div className="content">
                <div>
                  <h3>01</h3>
                  <p>Junaid Saah | October 3, 2020</p>
                  <h4>A Call Towards Sustainability</h4>
                </div>
                <img
                  src="https://www.marstech.co.in/images/Programming.svg"
                  className="thumbnail"
                  alt="blog thumbnail"
                />
              </div>
              <div className="divider" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Buzz;
