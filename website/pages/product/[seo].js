import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket_r } from "../../redux/actions";
import axios from "axios";
import { API_URL } from "../../../config";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import dynamic from "next/dynamic";

import HomeSeccoundBoxs from '../../app/components/HomePage/HomeSeccoundBoxs';

const Head = dynamic(() => import("../../app/core/Head"));
const HomeProductsFirst = dynamic(()=> import("../../app/components/HomePage/HomeProductsFirst"));
const ProductGallerry = dynamic(() => import("../../app/components/ProductDetail/Gallerry"));
const PoductVariants = dynamic(() => import("../../app/components/ProductDetail/PoductVariants"));

const Page = ({ resData = {}, seo = "", resProductSeccond = [],resProductFirst = [] }) => {
   const { user } = useSelector(({ login }) => login);

   const state = resData[0];
   const [contentDescription, seTcontentDescription] = useState("<p></p>");

   const dispatch = useDispatch();

   const getBasket = (id) => {
      if (user.id) {
         dispatch(getBasket_r(id));
      }
   };

   function createMarkup() {
      return { __html: contentDescription };
   }



   const replaceStyle = (dataHtml) => {
      return dataHtml
         .replaceAll("<p>", "<p style='min-height:25px' >")
         .replaceAll(
            "<pre>",
            "<pre  style='min-height:30px; background-color:#dbdbdb; padding:15px' >"
         )
         .replaceAll("<img ", "<img class='w-full sm:w-auto' ")
         .replaceAll(
            "<div class=\"media-wrap image-wrap ",
            "<div class=\"media-wrap image-wrap  w-full sm:w-auto "
         );
   };

   useEffect(() => {
      getBasket();
      seTcontentDescription(replaceStyle(state.description));
   }, [state.description]);

   return (
      <div>
      <div className="container-custom h-full ">
         <Head
            title={state.title}
            description={state.description_short}
            keywords={state.keys}
            image={state.allImages.length > 0 ? state.allImages[0].image : ""}/>
           <div className="grid grid-cols-12 my-0 lg:my-12  ">
             <div className=" col-span-12 lg:col-span-6  rounded-lg  ">
               <ProductGallerry images={state.allImages} />
            </div>
            <div className=" col-span-12 lg:col-span-6">
               <PoductVariants data={state} seo={seo} />
            <div>
<div className="ml-10" dangerouslySetInnerHTML={createMarkup()} />
               {/*<div class="product-single__description rte f16 pl-10">
               <p><strong>Print: </strong>Periwinkle</p>
               <p><strong>Product type: </strong>Kaftan</p>
               <p><strong>Fabric: </strong>Crepe</p>
               <p><strong>No. of Components: </strong>1</p>
               <p><strong>Details: </strong>With slip | Rose gold foil | Embellished neckline &amp; sleeve | Tassel detailing on the neckline | Asymmetrical hem</p>
               <p><strong>Fit: </strong>Relaxed</p>
               <p><strong>Styling: </strong>Pair it with our statement jewellery and mojris</p>
               <p><strong>Shipping: </strong>2 Weeks</p>
               <p><strong>Wash Care: </strong>Strictly dry clean only for digitally printed garments &amp; non-petroleum dry clean for hand-printed garments.</p>
               <p><strong>SKU: </strong>MAW21004</p>
             </div>*/}
         </div>
            </div>
         </div>

         <div>
           <h4>Other top rated products</h4>
         </div>
         </div>
         <HomeProductsFirst
            state={resProductFirst}
            title={{
               title: "",
               description: "",
            }}
         />
         <div className="mb-12">
          <HomeSeccoundBoxs
            state={resProductSeccond}
            title={{
               title: "You May Also Like",
               // s
            }}
         />
         </div>
         
      </div>
   );
};

export const getServerSideProps = async ({ query }) => {
   const response = await axios.get(`${API_URL}/productspublic/${query.seo}`);
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
         seo: query.seo,
         resProductFirst: responseProductFirs.data,
          resProductSeccond: responseProductSeccond.data,
      },
   };
};

export default Page;
