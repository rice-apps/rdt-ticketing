import React from 'react';
import EventCard from "../../components/Eventcard.js";
import Footer from "../../components/Footer.js";
import { useState, useEffect } from 'react';
import axios from 'axios';

//need to call getallevents route to create eventcard objects for each event
//search bar at top that will run the getevent route by name


const HomePage = () => {
    const url = "https://rdt-backend-production.up.railway.app/"
    const [events, setEvents] = useState([]);
    useEffect(()=> {
        axios.get(url + "getallfutureevents")
            .then(res => {
                setEvents(res.data);
            })
            .catch(err => {
                console.log(err);
            })       
    }, [])

    console.log(events)

    return (
      <div>
        <div className="searchBar">
            Hello
        </div>
        <div className="events">
            {events.map(event => {
                return <li><EventCard name ={event.name} date = {event.startDate} startTime = {event.startDate} endTime = {event.endDate} image = {event.photo} location = {event.location}/></li>
            })}
        </div>
        <div className="footer">
            <Footer/>
        </div>
      </div>
    );
  }
  
  export default HomePage;