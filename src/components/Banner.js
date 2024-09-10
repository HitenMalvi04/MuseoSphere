import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Swiper Autoplay styles
import 'swiper/css/pagination'; // Import Swiper Pagination styles

import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <div className="swiper-style-banner">
        <div className="bg"></div>
        <Swiper
          modules={[Autoplay, Pagination]} // Include the modules you want to use
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={1000} // Slide speed
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="banner">
              <div className="banner-inner">
                <div
                  className="banner-item myclass myclassforimage"
                  style={{
                    backgroundImage:
                      'url(https://miro.medium.com/v2/resize:fit:720/format:webp/1*iqRbiMSHneCZ-1KgUCiYBA.jpeg)',
                    
                  }}
                >
                  <div className="banner-item-small-wrapper">
                    <div className="banner-item-small">
                      <span>
                        <i>branding &#47; photoshooting</i>
                      </span>
                      <span>
                        <i>for:</i> <a href="#">Fashion Life company</a>
                      </span>
                      <div
                        className="banner-item-small-img"
                        style={{
                          backgroundImage:
                            'url(https://csmvs.in/wp-content/uploads/2022/01/Shoeing-the-horse-800x604.jpg)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <article className="text-center">
                    <h1 className="h1">Art &#8211; real passion</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras elementum id metus ac tempus. Praesent ut mauris eget
                      velit volutpat posuere.
                    </p>
                    <div className="btn-wrap">
                      <a href="#" className="btn-1">
                        <span>view more</span>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </SwiperSlide>


          {/* Slide 2 */}
          <SwiperSlide>
            <div className="banner">
              <div className="banner-inner">
                <div
                  className="banner-item myclassforimage"
                  style={{ backgroundImage: 'url(img/banner-img-2.jpg)' }}
                >
                  <div className="banner-item-small-wrapper">
                    <div className="banner-item-small">
                      <span>
                        <i>branding &#47; photoshooting</i>
                      </span>
                      <span>
                        <i>for:</i> <a href="#">Fashion Life company</a>
                      </span>
                      <div
                        className="banner-item-small-img"
                        style={{ backgroundImage: 'url(img/banner-img-2-1.jpg)' }}
                      ></div>
                    </div>
                  </div>
                  <article className="text-center">
                    <h2 className="h1">Creativity Unleashed</h2>
                    <p>
                      Cras elementum id metus ac tempus. Praesent ut mauris eget
                      velit volutpat posuere. Nullam et arcu consequat.
                    </p>
                    <div className="btn-wrap">
                      <a href="#" className="btn-1">
                        <span>Discover more</span>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="banner">
              <div className="banner-inner myclassforimage">
                <div
                  className="banner-item"
                  style={{ backgroundImage: 'url(img/banner-img-3.jpg)' }}
                >
                  <div className="banner-item-small-wrapper">
                    <div className="banner-item-small">
                      <span>
                        <i>branding &#47; photoshooting</i>
                      </span>
                      <span>
                        <i>for:</i> <a href="#">Fashion Life company</a>
                      </span>
                      <div
                        className="banner-item-small-img"
                        style={{ backgroundImage: 'url(img/banner-img-3-1.jpg)' }}
                      ></div>
                    </div>
                  </div>
                  <article className="text-center">
                    <h2 className="h1">Passion in Every Frame</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent ut mauris eget velit volutpat posuere.
                    </p>
                    <div className="btn-wrap">
                      <a href="#" className="btn-1">
                        <span>Explore now</span>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
