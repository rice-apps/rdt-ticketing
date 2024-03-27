// import logo from './logo.svg';
import './App.css';
import EventCard from "./components/Eventcard.js";
import axios from 'axios';

function App() {
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
    </div>
  );
}

export default App;
