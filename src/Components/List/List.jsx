import "./List.css";
import ListItem from "./ListItem/ListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const List = () => {
  return (
    <>
      <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="swiper-main-container">
          <Swiper
            spaceBetween={0}
            grab={true}
            speed={1500}
            // slidesPerView={}
            breakpoints={{
              1700: {
                slidesPerView: 7.2,
              },
              1500: {
                slidesPerView: 6.2,
              },
              1300: {
                slidesPerView: 5.2,
              },
              1100: {
                slidesPerView: 4.2,
              },
              900: {
                slidesPerView: 3.6,
              },
              700: {
                slidesPerView: 2.8,
              },
              600: {
                slidesPerView: 2.4,
              },
              550: {
                slidesPerView: 2.2,
              },
              500: {
                slidesPerView: 2.1,
              },
              450: {
                slidesPerView: 1.8,
              },
              400: {
                slidesPerView: 1.7,
              },
              350: {
                slidesPerView: 1.5,
              },
              330: {
                slidesPerView: 1.4,
              },
              300: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
            navigation
          >
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default List;
