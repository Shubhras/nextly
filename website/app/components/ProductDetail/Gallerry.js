import { useEffect, useState } from "react";
import Magnifier from "react-magnifier";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs, Autoplay } from "swiper";
// install Swiper modules

SwiperCore.use([Navigation, Thumbs, Autoplay]);

import { IMG_URL } from "../../../../config";

const Default = ({ images = [] }) => {
   const state = images.sort((a, b) => a.order - b.order);
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   useEffect(() => { }, []);

   return (
      <div className="image-slider">
      <div className="w-full">
         <Swiper
            style={{
               "--swiper-navigation-color": "#000",
               "--swiper-pagination-color": "#000",

            }}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={{
               delay: 15000,
               disableOnInteraction: false,
            }}
            className="w-full mb-1 text-center"
         >
            {state.map((val) => (
               <SwiperSlide key={val.image}>
                  <div className="item -mb-10">
                  <Magnifier mgHeight={425} mgWidth={425} mgBorderWidth={1} zoomFactor={0.4} src={IMG_URL + val.image} width={'100%'} className=" shadow MagicZoom w-full all-scroll"/>
                      
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <Swiper
            onSwiper={setThumbsSwiper}
            freeMode={true}
            watchSlidesProgress={true}
            className="mySwiper"
            breakpoints={{
               100: {
                  slidesPerView: 4,
                  spaceBetween: 15,
               },
               1024: {
                  slidesPerView: 7,
                  spaceBetween: 30,
               },
            }}
         >
            {state.map((val, i) => (
               <SwiperSlide key={i}>
                  <div className="item">
                     <div
                        className="bg-cover bg-center  border-2 ml-2  h-20 w-20"
                        style={{
                           backgroundImage: "url(" + IMG_URL + "/" + val.image + ")",
                        }}
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
      </div>
   );
};

export default Default;
