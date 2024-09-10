import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import About from "./components/About";

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/" element={<Layout />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
