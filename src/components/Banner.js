import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="swiper-style-banner">
  <div className="bg"></div>
  <div
    className="swiper-container"
    data-speed="1000"
    data-parallax="1"
    data-pagination-rel="0"
    data-breakpoints="1"
    data-slides-per-view="1"
    data-xs-slides="1"
    data-sm-slides="1"
    data-md-slides="1"
  >
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="banner">
          <div className="banner-inner">
            <div
              className="banner-item"
              style={{ backgroundImage: "url(img/banner-img-1.jpg)" }}
            >
              <div className="banner-item-small-wrapper">
                <div className="banner-item-small">
                  <span data-swiper-parallax="-100">
                    <i>branding &#47; photoshooting</i>
                  </span>
                  <span data-swiper-parallax="-200">
                    <i>for:</i> <a href="#">Fashion Life company</a>
                  </span>
                  <div
                    className="banner-item-small-img"
                    style={{ backgroundImage: "url(img/banner-img-1-1.jpg)" }}
                  ></div>
                </div>
              </div>
              <article className="text-center">
                <h1 className="h1" data-swiper-parallax="-200">
                  Art &#8211; real passion
                </h1>
                <p data-swiper-parallax="-400">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras elementum id metus ac tempus. Praesent ut mauris eget
                    velit volutpat posuere
                  </span>
                </p>
                <div className="btn-wrap" data-swiper-parallax="-600">
                  <a href="#" className="btn-1">
                    <span>view more</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="banner">
          <div className="banner-inner">
            <div
              className="banner-item"
              style={{ backgroundImage: "url(img/banner-img-2.jpg)" }}
            >
              <div className="banner-item-small-wrapper">
                <div className="banner-item-small">
                  <span data-swiper-parallax="-100">
                    <i>branding &#47; photoshooting</i>
                  </span>
                  <span data-swiper-parallax="-200">
                    <i>for:</i> <a href="#">Fashion Life company</a>
                  </span>
                  <div
                    className="banner-item-small-img"
                    style={{ backgroundImage: "url(img/banner-img-2-1.jpg)" }}
                  ></div>
                </div>
              </div>
              <article className="text-center">
                <h2 className="h1" data-swiper-parallax="-200">
                  Art &#8211; real passion
                </h2>
                <p data-swiper-parallax="-400">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras elementum id metus ac tempus. Praesent ut mauris eget
                    velit volutpat posuere
                  </span>
                </p>
                <div className="btn-wrap" data-swiper-parallax="-600">
                  <a href="#" className="btn-1">
                    <span>view more</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="banner">
          <div className="banner-inner">
            <div
              className="banner-item"
              style={{ backgroundImage: "url(img/banner-img-3.jpg)" }}
            >
              <div className="banner-item-small-wrapper">
                <div className="banner-item-small">
                  <span data-swiper-parallax="-100">
                    <i>branding &#47; photoshooting</i>
                  </span>
                  <span data-swiper-parallax="-200">
                    <i>for:</i> <a href="#">Fashion Life company</a>
                  </span>
                  <div
                    className="banner-item-small-img"
                    style={{ backgroundImage: "url(img/banner-img-3-1.jpg)" }}
                  ></div>
                </div>
              </div>
              <article className="text-center">
                <h2 className="h1" data-swiper-parallax="-200">
                  Art &#8211; real passion
                </h2>
                <p data-swiper-parallax="-400">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras elementum id metus ac tempus. Praesent ut mauris eget
                    velit volutpat posuere
                  </span>
                </p>
                <div className="btn-wrap" data-swiper-parallax="-600">
                  <a href="#" className="btn-1">
                    <span>view more</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="banner">
          <div className="banner-inner">
            <div
              className="banner-item"
              style={{ backgroundImage: "url(img/banner-img-4.jpg)" }}
            >
              <div className="banner-item-small-wrapper">
                <div className="banner-item-small">
                  <span data-swiper-parallax="-100">
                    <i>branding &#47; photoshooting</i>
                  </span>
                  <span data-swiper-parallax="-200">
                    <i>for:</i> <a href="#">Fashion Life company</a>
                  </span>
                  <div
                    className="banner-item-small-img"
                    style={{ backgroundImage: "url(img/banner-img-4-1.jpg)" }}
                  ></div>
                </div>
              </div>
              <article className="text-center">
                <h2 className="h1" data-swiper-parallax="-200">
                  Art &#8211; real passion
                </h2>
                <p data-swiper-parallax="-400">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras elementum id metus ac tempus. Praesent ut mauris eget
                    velit volutpat posuere
                  </span>
                </p>
                <div className="btn-wrap" data-swiper-parallax="-600">
                  <a href="#" className="btn-1">
                    <span>view more</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination swiper-pagination-black"></div>
  </div>
</div>

    </>
  );
};

export default Banner;
