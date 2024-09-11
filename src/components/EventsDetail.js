import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get event ID from URL
import axios from "axios";
import Header from "./Header";

const EventsDetail = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null); // State to hold the event details
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch event details from the API
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`https://museosphere-backend.onrender.com/api/events/${id}`);
        setEvent(response.data); // Set the event data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching event details:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]); // Re-fetch if the ID changes


  const imageStyle = {
    width: "500px", // Set a fixed width
    height: "500px", // Set a fixed height
    objectFit: "cover", // Ensure the image maintains aspect ratio and fills the area
    borderRadius: "8px", // Optional: Add rounded corners if needed
  };
  
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0",
    paddingTop: "10%",
    paddingLeft: "5%",
  };

  const headerStyle = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#555",
  };


  const bookingContainerStyle = {
    width: "30%",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    alignSelf: "flex-start",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const bookingBlock = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const eventListCardsContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  };
  

  if (loading) {
    return (
      <div style={pageStyle}>
        <Header />
        <h1>Loading event details...</h1>
      </div>
    );
  }

  if (!event) {
    return (
      <div style={pageStyle}>
        <Header />
        <h1>Event not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div style={pageStyle}>
        <div>
          {/* header */}
          <br/><br/>
          <h1 style={headerStyle}>{event.name}</h1>
          {/* paragraph start*/}
          <p style={paragraphStyle}>{event.description}</p>
          <p style={paragraphStyle}>
            Date: {new Date(event.date).toLocaleDateString()} {/* Convert date to readable format */}
          </p>
          {/* paragraph end */}
          <br/>
          <div style={bookingBlock}>
            {/* image */}
            <img
              src={event.event_image || "/img/museum/event-img-1.jpg"} // Use event image from API or fallback
              alt={event.title}
              style={imageStyle}
            />

            {/* Right Booking Container */}
            <div style={bookingContainerStyle}>
              <h3>Book an Event</h3>
              <form style={formStyle}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={inputStyle}
                />
                <input type="date" style={inputStyle} />
                <input
                  type="number"
                  placeholder="Number of Tickets"
                  style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
