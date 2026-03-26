import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import Card from "../Card/Card";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

const Carousel = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      <LeftNavButton onClick={() => swiperRef.current?.slidePrev()} />
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // modules={[Navigation]}
          spaceBetween={20}
          // navigation
          breakpoints={{
                320: { slidesPerView: 2 },
                635: { slidesPerView: 3 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card album={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <RightNavButton onClick={() => swiperRef.current?.slideNext()} />
    </div>
  );
};

export default Carousel;