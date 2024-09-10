import React from "react";
import Header from "./Header";

const Events = () => {
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "auto", // Adjust height to fill space below header
    display: "flex",
    alignItems: "center", // Align content vertically in the remaining space
    justifyContent: "center", // Center content horizontally
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

  const imageStyle = {
    width: "100%", // Make the image responsive
    maxWidth: "800px", // Limit the max width
    // marginTop: "20px",
  };

  const eventContent = {
    width: "100%",
    height: "20%",
    padding: "10px",
  };

  const bookingContainerStyle = {
    width: "30%", // Fixed width for the booking container
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    alignSelf: "flex-start", // Align booking container to top
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
    alignItems: "center", // Align content vertically in the remaining space
    justifyContent: "center",
    gap: "20px",
  };

  const eventListCardsContainer = {
    display: "flex",
    alignItems: "center", // Align content vertically in the remaining space
    justifyContent: "center",
    // flexDirection: "row",
    gap: "20px",
    padding: "20px",
  };
  return (
    <div>
      <Header />
      <div style={pageStyle}>
        <div>
          {/* header */}
          <h1 style={headerStyle}>Events & Festivals</h1>
          {/* paragraph start*/}
          <p style={paragraphStyle}>
            Come and experience our incredible festivals. Indian fairs and
            festivals are the major attraction and best way to explore India.
            India is a land of festivals and fairs. In India, every region,
            every season and every religion has plenty to celebrate.
            Celebrations centre around prayers, seeking blessings, exchanging
            goodwill, decorating houses, wearing new clothes, music, dance,
            traditional sports and feasting. India also hosts a large number of
            contemporary events celebrating culture, art, dance, music, food,
            literature and sports etc.
          </p>
          <p style={paragraphStyle}>
            The website also provides access to live streaming from various
            places of pilgrimage from its online darshan page.
          </p>
          {/* paragraph end*/}
          <div style={bookingBlock}>
            {/* image */}
            <img
              src="/img/museum/event-img-1.jpg"
              alt="Event Image"
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

          {/* card corousel */}
          <div style={eventContent}>
            <h2>Current Events</h2>
            {/* <section className="pt-5 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <h3 className="mb-3">Carousel cards title</h3>
                  </div>
                  <div className="col-6 text-right">
                    <a
                      className="btn btn-primary mb-3 mr-1"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-arrow-left"></i>
                    </a>
                    <a
                      className="btn btn-primary mb-3"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <div
                      id="carouselExampleIndicators2"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7d35bfc18b8dfb0430e665174e6197b1"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </div>

          {/* event list */}
          {/* <div className="eventListCardsContainer">
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Event"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
              </div>
            </div>
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Event"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
              </div>
            </div>
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Event"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
              </div>
            </div>
          </div> */}

          {/* card corousel */}
          {/* <div>
            <section className="pt-5 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <h3 className="mb-3">Carousel cards title</h3>
                  </div>
                  <div className="col-6 text-right">
                    <a
                      className="btn btn-primary mb-3 mr-1"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-arrow-left"></i>
                    </a>
                    <a
                      className="btn btn-primary mb-3"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <div
                      id="carouselExampleIndicators2"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7d35bfc18b8dfb0430e665174e6197b1"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
