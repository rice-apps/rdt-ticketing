import logo from './logo.svg';
import './App.css';
import EventCard from "./components/Eventcard.js";
import HomePage from "./pages/homePage/homePage.js";
//<EventCard name ={"Event 1"} date = {"3/23/2024"} startTime = {"6:30"} endTime = {"8:30"} image = {"https://picsum.photos/200/100"} location = {"Somewhere"}/>
function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
