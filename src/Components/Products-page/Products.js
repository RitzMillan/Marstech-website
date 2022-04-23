import React, { useEffect, useState } from "react";
import "../../App.scss";
import "./Products.scss";
import eth from "../../Assets/images/ethereum.png";
import reseller from "../../Assets/images/reseller.png";
import bizz from "../../Assets/images/bizz.png";

function Products(props) {

  useEffect(() => {
    if(props.qty === 3){
      document.querySelector(`.left-inner-container`).style.transform = `translateY(-${0}00vh)`;
      document.querySelector(`.right-inner-container`).style.transform = `translateY(-${2}00vh)`;
    }
    else if(props.qty === 4){
      document.querySelector(`.left-inner-container`).style.transform = `translateY(-${1}00vh)`;
      document.querySelector(`.right-inner-container`).style.transform = `translateY(-${1}00vh)`;
    }
    else if(props.qty === 5){
      document.querySelector(`.left-inner-container`).style.transform = `translateY(-${2}00vh)`;
      document.querySelector(`.right-inner-container`).style.transform = `translateY(-${0}00vh)`;
    }
  },[props.qty])

  return (
    <div>
      <div className="products-grid-container">
        <div className="moving-text">
          <div className="marquee1">OUR PRODUCT</div>
          <div className="marquee2">OUR PRODUCT</div>
        </div>

        <div className="left-outer-container">
          <div className="left-inner-container">
            <div id="l1" className="left-container">
              <div className="left">
                <div className="content">
                  <h3>BlockDoc</h3>
                  <p className="sd">Secure Document Sharing Using Blockchain</p>
                  <p className="ld">
                    Graphic interface that provide you the ability to download
                    and share your documents securely with anyone using SHA256
                    encryption.
                    <br />
                    <br />
                    We have created our own Ethereum smart contracts written in
                    Solidity: a language library with similarities to C and
                    JavaScript
                  </p>
                  <button className="sbutton">COMMING SOON</button>
                </div>
                <div className="left-accent">
                  <h2>Blockchain</h2>
                </div>
              </div>
            </div>

            <div id="l2" className="left-container">
              <div className="left">
                <div className="img-container">
                  <img src={reseller} alt="reselling online"></img>
                </div>
                <div className="left-accent">
                  <h2>Business</h2>
                </div>
              </div>
            </div>

            <div id="l3" className="left-container">
              <div className="left">
                <div className="content">
                  <h3>Bizz B2B</h3>
                  <p className="sd">A complete B2B solution</p>
                  <p className="ld">
                    Whether you are a Manufacturer or Distributor, we’ve got you
                    back in everything you need to manage you supply chain.
                    <br />
                    <br />
                    Simple to understand and Powerful to use webapp that is
                    equally user frendly in mobile as is in desktop.
                  </p>
                  <button className="mbutton">KNOW MORE</button>
                </div>
                <div className="left-accent">
                  <h2>Efficient</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div id="r3" className="right-container">
              <div className="right">
                <div className="img-container">
                  <img src={bizz} alt="online business"></img>
                </div>
                <div className="right-accent">
                  <h2>Supplychain</h2>
                </div>
              </div>
            </div>

            <div id="r2" className="right-container">
              <div className="right">
                <div className="content">
                  <h3>Reseller Platform</h3>
                  <p className="sd">
                    Start Your Business from Home with Zero Investment
                  </p>
                  <p className="ld">
                    An app to revolutionize the Retail and Whole sale market by
                    transforming the way we do Business. Loaded with features to
                    streamline your inventory and sales.
                    <br />
                    <br />
                    Clean User interface that has full control of the database
                    and all service features.
                  </p>
                  <button className="mbutton">KNOW MORE</button>
                </div>
                <div className="right-accent">
                  <h2>Online</h2>
                </div>
              </div>
            </div>

            <div id="r1" className="right-container">
              <div className="right">
                <div className="img-container">
                  <img src= {eth} alt="blockchain document"></img>
                </div>
                <div className="right-accent">
                  <h2>Technology</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <button onClick={incQty}>scroll down</button>
          <button onClick={decQty}>scroll up</button> */}
        </div>
      </div>
    </div>
  );
}

export default Products;
