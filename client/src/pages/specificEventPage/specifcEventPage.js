import React from 'react';
import "./specifcEventPage.css"
import { CalendarOutlined, ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';


const SpecifcPage = () => {
    return (
        <div className="event-page">
          <div className="image-slider">
        
          </div>
          <div className="event-details">
            
            <h1>Origins Showcase</h1>
            <p className="event-date"><CalendarOutlined /> March 30, 2024</p>
            <p className="event-time"><ClockCircleOutlined /> 6:30 PM - 10:00 PM</p>
             <p className="event-location"><EnvironmentOutlined /> RMC Grand Hall</p>
            <h2>Event description</h2>
            <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum, arcu ac fringilla fermentum, neque justo feugiat erat, a congue tortor sapien vel eros. Integer tincidunt augue eu purus fermentum, in luctus libero dignissim. Sed vel eros quis odio convallis placerat.
            Nunc auctor felis ut elit varius, in bibendum purus luctus. Nullam at justo eu libero convallis pellentesque. Sed id arcu vitae quam aliquet congue. Nulla facilisi. Sed vitae tortor vel velit vestibulum cursus.
            In "Origins," a mesmerizing dance performance unfolds, revealing the intricate tapestry of movement and emotion. The dancers, like ancient storytellers, weave a narrative through their bodies, expressing the essence of existence and the roots of human experience. The choreography is a symphony of fluidity and precision, a dance of souls tracing the timeless journey from origin to expression.</p>
            <button className="register-button">Register</button>
          </div>
        </div>
    );
};


export default SpecifcPage;