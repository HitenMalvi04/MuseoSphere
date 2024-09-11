import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();
  // const [userData, setUserData] = ({});

  // Scroll effect to change header padding and add 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if token exists in localStorage on component mount
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    // setUserData(JSON.stringify(token));
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout function
  const handleLogout = () => {
    sessionStorage.clear(); // Remove token
    setIsLoggedIn(false); // Update state to show login button
    navigate('/'); // Redirect to home page or any other page
  };

  return (
    <header
      className={` header-style-2 ${
        isScrolled ? "scrolled bg-white" : "transperent"
      }`}
    >
      <div className="wide-container-fluid ">
        <div className="row">
          <div className="col-xs-2">
            <a className="logo" href="">
              
            </a>
          </div>
          <div className="col-xs-10 text-right">
            <ul className="header-menu open">
              <li>
                {/* <h1>Welcome,{userData.token.name}</h1> */}
                <h1>Welcome</h1>
              </li>
              <li className="active">
                <Link to="/">
                  <span>MuseoSphere</span>
                </Link>
              </li>
              <li>
                <Link to="/events">
                  <span>Event & Exhibition</span>
                </Link>
              </li>
              <li>
                <Link to="/TicketBooking">
                  <span>Buy a Ticket</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <a href="contact.html">
                  <span>Contact us</span>
                </a>
              </li>
              {isLoggedIn ? (
                <li>
                  <button className="btn btn-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Log in &#47; Sign up</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
