import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/loginPage/loginPage.js";
import SpecifcPage from "./pages/specificEventPage/specifcEventPage.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/homePage.js";
import EventCard from "./components/Eventcard.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/event",
    element: (
      <EventCard
        name={"Event 1"}
        date={"3/23/2024"}
        startTime={"6:30"}
        endTime={"8:30"}
        image={"https://picsum.photos/200/100"}
        location={"Somewhere"}
      />
    ),
  },
  {
    path: "/specific",
    element: <SpecifcPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
