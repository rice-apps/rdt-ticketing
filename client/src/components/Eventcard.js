import React from 'react'

import "../Components.css"

const EventCard = (props) => {
  return (
    <div className="event">
          <div className="event-image">
            {props.photo}
          </div>
          <h2>{props.name}</h2>
          <h3>Date: {props.date}</h3>
          <h3>Time: {props.date} - {props.date}</h3>
          <h3>Location: {props.location}</h3>
    </div>
  )
}

export default EventCard