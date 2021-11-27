import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieCarousel.scss";
import "swiper/swiper-bundle.min.css";
import MovieCarouselItem from "../MovieCarouselItem/MovieCarouselItem";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";

export default function MovieCarousel({ list }) {
  // let [loading, setLoading] = useState(true);
  SwiperCore.use([EffectCoverflow, Navigation]);

  const renderPhim = () => {
    // if (loading) {
    //   return (
    //     <Slider style={{ position: "relative" }} {...settings}>
    //       {danhSachPhim.map(() => {
    //         return (
    //           <div className="item__inrow p-2 mb-2">
    //             <div className="item__link">
    //               <div className="item__img">
    //                 <SkeletonTheme color="#202020" highlightColor="#444">
    //                   <Skeleton height={290} />
    //                 </SkeletonTheme>
    //                 <SkeletonTheme color="#202020" highlightColor="#444">
    //                   <span className="film__age">
    //                     <Skeleton />
    //                   </span>
    //                 </SkeletonTheme>
    //               </div>
    //               <div className="item__info">
    //                 <SkeletonTheme color="#202020" highlightColor="#444">
    //                   <p className="film__name">
    //                     <Skeleton />
    //                   </p>
    //                 </SkeletonTheme>
    //                 <SkeletonTheme color="#202020" highlightColor="#444">
    //                   <span className="film__during">
    //                     <Skeleton />
    //                   </span>
    //                 </SkeletonTheme>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </Slider>
    //   );
    // } else {
    return (
      <Swiper
        className="custom-swiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        breakpoints={{
          375: {
            width: 345,
            slidesPerView: 1,
            centeredSlides: false,
            modifier: 5,
          },
          640: {
            width: 640,
            centeredSlides: false,
            modifier: 5,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
            centeredSlides: true,
          },
          1200: {
            width: 1200,
            slidesPerView: 5,
          },
        }}
      >
        {list?.map((phim, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieCarouselItem phimItem={phim} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
  return renderPhim();
}
