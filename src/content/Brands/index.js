import React from "react";
import { OuterWrap, InnerWrap } from "../../Wraps";
import { BrandsSection } from "./BrandsElements";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Brands({ data }) {
  return (
    <OuterWrap>
      <BrandsSection>
        <InnerWrap>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={100}
            slidesPerView={5}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              "@1.00": {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 100,
              },
            }}
            // navigation={true}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((d, i) => (
              <SwiperSlide key={i}>
                <img src={d.img} alt={d.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </InnerWrap>
      </BrandsSection>
    </OuterWrap>
  );
}

export default Brands;
