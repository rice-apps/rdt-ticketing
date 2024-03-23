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

            <h3>Date: {props.date}</h3>
            <h3>Time: {props.startTime} - {props.endtime}</h3>
            <h3>Location: {props.location}</h3>

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