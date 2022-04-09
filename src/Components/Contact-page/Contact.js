import React from 'react'
import "../../App.scss";
import "./Contact.scss";


function Contact() {
  return (
    <div>
        <div className='contact-grid-container'>
            <div className='contact-left-container'>

            </div>
            <div className='contact-right-container'>
                <div className='form'>
                    <h4>Got an idea ? Lets Connect</h4>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <textarea type="text" placeholder="Tell us all about it "></textarea>
                    <button type="button" className='mbutton'>SEND</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Contact;