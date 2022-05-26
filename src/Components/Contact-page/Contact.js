import React from 'react'
import "../../App.scss";
import "./Contact.scss";
import stencil from './artwork/stencil_film.svg'
import cover from './artwork/cover_piece.svg'
import astro from './artwork/astronaut.png'
import beep from "../../Assets/sounds/beep.mp3"
import { Howl } from "howler";


function Contact() {

  const bep = new Howl({
    src: [beep],
    volume: 0.02
    });

  function handlebeep() {
    bep.play()
  }


  return (
    <div>
        <div className='contact-grid-container'>
            <div className='contact-left-container'>
              <div className='artwork'>
                <div className='gradient'></div>
                <div className='gradient-shadow'></div>
                <img src={stencil} className="stencil" alt="stencil"></img>
                <img src={cover} className="cover" alt="cover"></img>
                <img src={astro} className="astro" alt="astronaut"></img>
                <div className='text-box'>
                  <p className='top-txt'>M A R S T E C H</p>
                  <p className='bottom-txt'>P U L L I N G&nbsp;&nbsp;&nbsp;V A L U E&nbsp;&nbsp;&nbsp;F O R M&nbsp;&nbsp;&nbsp;T H E&nbsp;&nbsp;&nbsp;D A R K</p>
                </div>
              </div>
            </div>
            <div className='contact-right-container'>
                <div className='form'>
                    <h4>Got an idea ? Lets Connect</h4>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <textarea type="text" placeholder="Tell us all about it "></textarea>
                    <button type="button" className='mbutton' onMouseOver={handlebeep}>SEND</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Contact;