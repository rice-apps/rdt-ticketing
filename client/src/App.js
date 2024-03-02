import logo from './logo.svg';
import './App.css';
import EventCard from "./components/EventCard.js";

function App() {
  return (
    <div className="App">
      <EventCard name ={"Event 1"} date = {"3/23/2024"} startTime = {"6:30"} endTime = {"8:30"} image = {"https://picsum.photos/200/100"} location = {"Somewhere"}/>
    </div>
  );
}

export default App;
