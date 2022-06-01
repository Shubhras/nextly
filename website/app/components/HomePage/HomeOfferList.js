import Image from "next/image";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Autoplay]);


import Link from "next/link";
import { IMG_URL } from "../../../../config";
   const aaaaaa = [
      "../images/Rectangle 72.png",
      "../images/Rectangle 73.png",
      "../images/Rectangle 74.png",
      "../images/Rectangle 75.png",
      "../images/Screenshot112022-04-28.png",
   ];
const Default = ({ state = [], title = { title: "", description: "" } }) => {
   return (
      <div className=" container-custom mb-9 pb-2  home-offer-list">
         <div className="w-full text-center float-left   mb-12">
            <h2>{title.title} </h2>
            <h1 className="text-lg">{title.description} </h1>
         </div>
         <div className=" w-full gap-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {state.map((val,i) => (
               <>
              {i < 4 ? (
               <div key={val._id} className="overflow-hidden ">
                  <Link href={val.link + "/"} >
                     <a>
                       {/* <Image
                           loader={({ src }) => src}
                           src={`${IMG_URL + val.image}`}
                           className="w-full h-full   transition-all"
                           height="651"
                           width="651"
                           alt={val.title + " "}
                        />*/}
                         <Image
                           loader={({ src }) => src}
                           src={aaaaaa[i]}
                           className="w-full h-full transition-all"
                           height="651"
                           width="651"
                           alt={val.title + " "}
                        />
                        {/*<div className="w-full text-center  width-offer-list" 
                        style={{background: '#00000080',
                         marginTop: '-64px',width:'42.1%', fontSize: 35, zIndex: '26',position:'absolute',
                         color: 'white',padding: '2px 0'}}>Whats New</div>
                        <div className="w-full text-center my-2 h-5  ">
                           {val.description}
                        </div>*/}
                     </a>
                  </Link>
               </div>
                ) : (
                     ""
                  )}
                  </>
            ))}
         </div>
      </div>
   );
};

export default Default;
