import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import EventsDetail from "./components/EventsDetail";
// import SignUp from "./components/SignUp";
import About from "./components/About";
import Events from "./components/Events";
import New_Dashboard from "./components/new_dashboard";
import TicketBooking from "./components/TicketBooking";
const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Layout />}>
        <Route index element={<New_Dashboard/>}/>
          <Route path="events/:id" element={<EventsDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/TicketBooking" element={<TicketBooking />} />
          {/* <Route path=""></Route> */}
        </Route>
        <Route path="/sign-up" element={<Register setAuthToken={setAuthToken} />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
