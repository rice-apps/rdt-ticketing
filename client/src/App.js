import "./App.css";
import EventCard from "./components/Eventcard.js";
import SpecifcPage from "./pages/specificEventPage/specifcEventPage";
import HomePage from "./pages/homePage/homePage.js";

function App() {
  return (
    <div className="App">
      <EventCard
        name={"Event 1"}
        date={"3/23/2024"}
        startTime={"6:30"}
        endTime={"8:30"}
        image={"https://picsum.photos/200/100"}
        location={"Somewhere"}
      />
      <SpecifcPage />
      <HomePage />
    </div>
  );
}

export default App;
