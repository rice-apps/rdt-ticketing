import React from 'react'

import "../styles/ComponentsFooter.css"

function FooterBar({image, title}) {
    return (
      <li className="footer-bar">
        <img src={image} alt={title} className="footer-bar-image" />
        <p className="footer-bar-title">{title}</p>
      </li>
    );
  }


  
  function Footer() {
    // const eventsImage = require('./eventsDark.png'); 
    // const myEventsImage = require('./myEventsLight.png'); 
    // const profileImage = require('./profileLight.png');
  
    return (
      <footer className="footer">
        <ul className="footer-list">
          {/* <FooterBar image={eventsImage} title="Events" />
          <FooterBar image={myEventsImage} title="My Events" />
          <FooterBar image={profileImage} title="Profile" /> */}
        </ul>
      </footer>
    );
  }
  

export default Footer