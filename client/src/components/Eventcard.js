import React from "react";

import "../styles/ComponentsEventCard.css"

const EventCard = (props) => {
  return (
    <div className="event">
          <div className="event-image">
            <img src={props.image}/>
          </div>
          <div className="event-description">
            <div className="event-name"><h2>{props.name}</h2></div>
            <div className="event-subtext">
              <div className="date">Date: {props.date}</div>
              <div className="time">Time: {props.startTime} - {props.endTime}</div>
              <div className="location">Location: {props.location}</div>
            </div>
          </div>
          
    </div>
  )
}

export default EventCard