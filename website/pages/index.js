import func from "../util/helpers/func";
import axios from "axios";
import { wrapper } from "../redux/store";
import { API_URL } from "../../config";
import { Button } from "antd";
import dynamic from "next/dynamic";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
//import HomeSeccoundBoxs from '../app/components/HomePage/HomeSeccoundBoxs';
// const HomeFirstBox = dynamic(() => import("../app/components/Home/HomeFirstBox"));
// const HomeSeccoundBoxs = dynamic(() => import("../app/components/Home/HomeSeccoundBoxs"));
// const HomeOfferList = dynamic(() => import("../app/components/Home/HomeOfferList"));
// const HomeProductsFirst = dynamic(() => import("../app/components/Home/HomeProductsFirst"));
// const Brands = dynamic(() => import("../app/components/Brands"));
// const HomeSlider = dynamic(() => import("../app/components/Home/HomeSlider"));


//const HomeFirstBox = dynamic(() => import("../app/components/HomePage/HomeFirstBox"));
//const HomeSeccoundBoxs = dynamic(() => import("../app/components/HomePage/HomeSeccoundBoxs"));
const HomeOfferList = dynamic(() => import("../app/components/HomePage/HomeOfferList"));
const HomeProductsFirst = dynamic(() => import("../app/components/HomePage/HomeProductsFirst"));
const Brands = dynamic(() => import("../app/components/Brands"));
const HomeSlider = dynamic(() => import("../app/components/HomePage/HomeSlider"));
const Head = dynamic(() => import("../app/core/Head"));

const homePage = ({
   resData = [],
   resProductFirst = [],
   //resProductSeccond = [],
}) => {


   const homeSlider = func.getCategoriesTree(
      resData,
      "61535837020a748d51968ecc"
   );
   // const homeFirstBox = func.getCategoriesTree(
   //    resData,
   //    "61537c2d6464c09286494c63"
   // );
   const homeOfferList = func.getCategoriesTree(
      resData,
      "6154640f79053f941d1b76c9"
   );

   const homeOfferListtitle = {
      title: resData.filter((val) => val._id === "6154640f79053f941d1b76c9")
         ?.title,
      description: resData.filter((val) => val._id === "6154640f79053f941d1b76c9")
         ?.description,
   };

   return (
      <div>
         <Head />
         <Brands />
         <HomeSlider state={homeSlider} />
         <HomeOfferList state={homeOfferList} title={homeOfferListtitle} />
         <div className="text-center">
            <h4>Collection Highlight</h4>
         </div>
         <div className="text-center mt-5">
            <Button>VIEW ALL </Button>
         </div>
         <HomeProductsFirst
            state={resProductFirst}
            title={{
               title: "",
               description: "",
            }}
         />
         <HomeOfferList state={homeOfferList} title={homeOfferListtitle} />
         <div className="text-center">
            <h4>Celebrity Closet</h4>
         </div>
         <div className="text-center mt-5">
            <Button>VIEW ALL </Button>
         </div>
         <HomeProductsFirst
            state={resProductFirst}
            title={{
               title: "",
               description: "",
            }}
         />{/*<HomeFirstBox state={homeFirstBox} />
          <HomeSeccoundBoxs
            state={resProductSeccond}
            title={{
               title: "New Products",
               description: "We Added New Products For You",
            }}
         />*/}
      </div>
   );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
   const response = await axios.get(`${API_URL}/homesliderpublic`);

   const filterObjectFirst = {
      sort: { saleqty: -1 },
      limit: 10,
      skip: 0,
   };

   const responseProductFirs = await axios.post(
      `${API_URL}/productspublic/home`,
      filterObjectFirst
   );

   const filterObjectSeccond = {
      sort: { createdAt: -1 },
      limit: 15,
      skip: 0,
   };

   const responseProductSeccond = await axios.post(
      `${API_URL}/productspublic/home`,
      filterObjectSeccond
   );

   return {
      props: {
         resData: response.data,
         resProductFirst: responseProductFirs.data,
         resProductSeccond: responseProductSeccond.data,
      },
   };
});

export default homePage;
