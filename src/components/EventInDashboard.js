import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper Pagination styles
import { Pagination } from "swiper/modules"; // Import Swiper Pagination module
import { Link } from "react-router-dom";

const EventInDashboard = () => {
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
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="row nopadding">
                  <div className="col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-1">
                    <div className="img-wrapper">
                      <img
                        src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Ancient Art Exhibition"
                      />
                    </div>
                  </div>
                  <div className="col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0">
                    <article className="small-sm bg-text">
                      <h6 className="h6">Ancient Art Exhibition</h6>
                      <div className="empty-space h5-xs"></div>
                      <i>Experience the beauty of ancient art</i>
                      <div className="empty-space h15-xs"></div>
                      <p>
                        Join us for a journey through centuries of art from
                        ancient civilizations. This exhibition showcases rare
                        artifacts and artistic masterpieces.
                      </p>
                      <div className="empty-space h35-xs"></div>
                      <div className="btn-wrap">
                        <Link to="/events" className="btn-2">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="row nopadding">
                  <div className="col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-1">
                    <div className="img-wrapper">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1679571040052-43a58c6f345a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Interactive Science Fair"
                      />
                    </div>
                  </div>
                  <div className="col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0">
                    <article className="small-sm">
                      <h6 className="h6">Interactive Science Fair</h6>
                      <div className="empty-space h5-xs"></div>
                      <i>Explore the world of science</i>
                      <div className="empty-space h15-xs"></div>
                      <p>
                        Engage with interactive science exhibits and live
                        demonstrations. Perfect for families and science
                        enthusiasts of all ages.
                      </p>
                      <div className="empty-space h35-xs"></div>
                      <div className="btn-wrap">
                        <Link to="/events" className="btn-2">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="row nopadding">
                  <div className="col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-1">
                    <div className="img-wrapper">
                      <img
                        src="https://images.unsplash.com/photo-1544213456-bc37cb97df74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Cultural Heritage Workshop"
                      />
                    </div>
                  </div>
                  <div className="col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0">
                    <article className="small-sm">
                      <h6 className="h6">Cultural Heritage Workshop</h6>
                      <div className="empty-space h5-xs"></div>
                      <i>Preserve and learn about our heritage</i>
                      <div className="empty-space h15-xs"></div>
                      <p>
                        A hands-on workshop exploring techniques to preserve
                        cultural heritage. Learn from experts and get involved
                        in preservation efforts.
                      </p>
                      <div className="empty-space h35-xs"></div>
                      <div className="btn-wrap">
                        <Link to="/events" className="btn-2">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="row nopadding">
                  <div className="col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-1">
                    <div className="img-wrapper">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1680101647775-1deb6c1bcecc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Medieval History Lecture"
                      />
                    </div>
                  </div>
                  <div className="col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0">
                    <article className="small-sm">
                      <h6 className="h6">Medieval History Lecture</h6>
                      <div className="empty-space h5-xs"></div>
                      <i>A journey through medieval times</i>
                      <div className="empty-space h15-xs"></div>
                      <p>
                        Attend an engaging lecture on medieval history, focusing
                        on societal changes, famous figures, and key events that
                        shaped the era.
                      </p>
                      <div className="empty-space h35-xs"></div>
                      <div className="btn-wrap">
                        <Link to="/events" className="btn-2">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 5 */}
              <SwiperSlide>
                <div className="row nopadding">
                  <div className="col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-1">
                    <div className="img-wrapper">
                      <img
                        src="https://images.unsplash.com/photo-1492140818141-7b1370b0b5ee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Modern Art Showcase"
                      />
                    </div>
                  </div>
                  <div className="col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0">
                    <article className="small-sm">
                      <h6 className="h6">Modern Art Showcase</h6>
                      <div className="empty-space h5-xs"></div>
                      <i>Explore contemporary creativity</i>
                      <div className="empty-space h15-xs"></div>
                      <p>
                        A showcase of modern art featuring local and
                        international artists. Explore unique perspectives and
                        thought-provoking pieces.
                      </p>
                      <div className="empty-space h35-xs"></div>
                      <div className="btn-wrap">
                        <Link to="/events" className="btn-2">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInDashboard;
