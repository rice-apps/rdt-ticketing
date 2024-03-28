// import logo from './logo.svg';
import './App.css';
import EventCard from "./components/Eventcard.js";
import axios from 'axios';

import SeatingChart from "./components/SeatingChart.js"
import { SeatsioSeatingChart, Pricing } from "@seatsio/seatsio-react";

function App() {
  const WORKSPACE_KEY = '6e446b5d-c0d9-48d4-b7ce-53045869b4d1'
  const public_key = 'ab92e245-48bb-4d3d-856a-90b1fc8adadd'
  const EVENT_DAY_1_KEY = '558ac821-11a0-4ad0-b4a3-3b7dce2c3348'


  const login = async () => {
    try {
      const res = await axios.get('http://localhost:3000/auth/google');
      // window.location.href = res.data.redirectUrl;
      console.log(res)
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  return (
    <div className="App">
      <button onClick={login}>login</button>
      <EventCard name ={"Event 1"} date = {"3/23/2024"} startTime = {"6:30"} endTime = {"8:30"} image = {"https://picsum.photos/200/100"} location = {"Somewhere"}/>
      <SeatingChart />
      {/* < SeatsioSeatingChart
        workspaceKey={WORKSPACE_KEY}
        event={EVENT_DAY_1_KEY}
        //   pricing={pricing}
        region="eu"
      /> */}
    </div>
  );
}

export default App;
