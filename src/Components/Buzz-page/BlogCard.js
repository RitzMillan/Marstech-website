import React from "react";
import "../../App.scss";
import "./Buzz.scss";

function BlogCard() {
  return (
    <div>
      <a
        href="https://www.marstech.co.in/images/Programming.svg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="blog-card">
          <div className="content">
            <div>
              <h3>05</h3>
              <p>Junaid Saah | October 3, 2020</p>
              <h4>A Call Towards Sustainability</h4>
            </div>
            <img
              src="https://www.marstech.co.in/images/Programming.svg"
              className="thumbnail"
              alt="blog thumbnail"
            />
          </div>
          <div className="divider"></div>
        </div>
      </a>
    </div>
  );
}

export default BlogCard;
