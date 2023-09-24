import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

import "./Swipe.css";

const Swipe = () => {
  return (
    <div className="swipe">
      <div className="container">
        <h1>testomonia</h1>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <blockquote>
              <cite>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean."
              </cite>
            </blockquote>
            <cite className="title">— Jean Smith</cite>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote>
              <cite>
                "A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth."
              </cite>
            </blockquote>
            <cite className="title">— Carl Spencer</cite>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote>
              <cite>
                "Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar."
              </cite>
            </blockquote>
            <cite className="title">— Ryan Peters</cite>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipe;
