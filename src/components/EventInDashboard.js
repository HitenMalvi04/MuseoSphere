import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper Pagination styles
import { Pagination } from "swiper/modules"; // Import Swiper Pagination module
import { Link } from "react-router-dom";

const EventInDashboard = () => {
  const [events, setEvents] = useState([]); // State to hold event data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://museosphere-backend.onrender.com/api/events");
        setEvents(res.data); // Set fetched events
        setLoading(false); // Turn off loading state
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>; // Display loading text while fetching data
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2 className="h2">
            Upcoming Museum Events<span></span>
          </h2>
        </div>
        <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
          <div className="text-center grey-dark">
            <div className="empty-space h25-xs"></div>
            <p>
              Discover our upcoming exhibitions, special events, and workshops
              designed for all ages. Stay connected with our cultural heritage!
            </p>
          </div>
        </div>
      </div>
      <div className="empty-space h15-xs"></div>
      <div className="row">
        <div className="col-md-12">
          {/* swiper */}
          <div className="swiper-style-1 reverse">
            <Swiper
              modules={[Pagination]} // Add pagination module
              pagination={{ clickable: true }} // Enable pagination
              speed={1000} // Slide speed
              slidesPerView={1}
            >
              {events.map((event) => (
                <SwiperSlide key={event.event_id}>
                  <div className="row nopadding">
                    <div className="col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-1">
                      <div className="img-wrapper">
                        <img src={event.event_image} alt={event.name} />
                      </div>
                    </div>
                    <div className="col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0">
                      <article className="small-sm bg-text">
                        <h6 className="h6">{event.name}</h6>
                        <div className="empty-space h5-xs"></div>
                        <i>{event.name}</i>
                        <div className="empty-space h15-xs"></div>
                        <p>{event.description}</p>
                        
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                        <div className="empty-space h35-xs"></div>
                        <div className="btn-wrap">
                        <Link to={`/events/${event.event_id}`} className="btn-2">
                          <span>Learn More</span>
                        </Link>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInDashboard;
