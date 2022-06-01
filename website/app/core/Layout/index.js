import React, { useState, useRef, useEffect } from 'react';
import { Layout, message,Row, Col } from "antd";
import { Select } from 'antd';
import { Input, Modal, Form,Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
   UserOutlined,
   ShoppingOutlined,
   LoginOutlined,
   LogoutOutlined,
   UserAddOutlined,
   SearchOutlined,
   LockOutlined,
   HeartOutlined,
} from "@ant-design/icons";
import {
   login_r,
   isAuthenticated_r,
   getBasket_r,
} from "../../../redux/actions";
import { useRouter } from "next/router";
import AuthService from "../../../util/services/authservice";
import axios from "axios";
import func from "../../../util/helpers/func";
import dynamic from "next/dynamic";


const { Option } = Select;

const CategoriesMenu = dynamic(() => import("../../components/CategoriesMenu"));
const TopMenu = dynamic(() => import("../../components/TopMenu"));
const Footer = dynamic(() => import("../../components/Footer"));
const Header = dynamic(() => import("../../components/Header"));
import Link from "next/link";
import { IMG_URL } from "../../../../config";
   const aaaaaa = [
      "../images/Screenshot112022-04-28.png",
   ];
import { checkCookies } from "cookies-next";
const haveCookie = checkCookies("isuser");



axios.defaults.withCredentials = true;

const { Content } = Layout;

const AppLayout = ({ children }) => {

   const router = useRouter();
   const dispatch = useDispatch();
   const { basket } = useSelector((state) => state.basket);
   const { errorFetch } = useSelector(({ settings }) => settings);
   const { isAuthenticated } = useSelector(({ login }) => login);
   const { topmenu } = useSelector(({ topmenu }) => topmenu);

   const loginControl = () => {
      if (!isAuthenticated) {
         AuthService.isAuthenticated().then((auth) => {
            if (auth.isAuthenticated) {
               dispatch(getBasket_r(auth.user.id));
               dispatch(login_r(auth.user));
               dispatch(isAuthenticated_r(true));
            }
         });
      }
   };


 function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}


   const fetchError = () => {
      if (errorFetch) {
         message.error(errorFetch);
      }
   };



   useEffect(() => {
      if (haveCookie) {
         loginControl();
      }
      fetchError();


   }, [isAuthenticated]);

   const isUnRestrictedRoute = (pathname) => {
      return pathname === "/sitemap.xml";
   };
const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [])
   return isUnRestrictedRoute(router.pathname) ? (
      children
   ) : (
      <>
         {/* <CircularProgress className={!isLoaded ? "visible" : "hidden"} /> */}
         <Layout>
         <div className="new-header">
         <div className="pt-1 announcement">
                        <div class="announc-margin">
                           <span class="announcement-text">Free Shipping </span>
                           <span class="announcement-link-text"> India: Above 999 INR |  International: Above 200 USD</span>
                     </div>
                     </div>


           <div id="sticky-header" style={{zIndex:'50'}} className={`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
           <div className="border-b bg-white" >
               <div className=" hearder-padding">

                  {/*<div className="h-7">
                     <TopMenu
                        socialmedia={func.getCategoriesTree(
                           topmenu,
                           "614b8cc75c153bab76bdf681"
                        )}
                        topmenu={func.getCategoriesTree(topmenu)}
                     />
                  </div>
                  {/*<Header />*/}


                  <div className="w-full flex justify-between">
                     <div className=" text-base text-right px-0 ">
                      <a href="/">
                           <img src="images/logo.png" alt="Logo" className="img-top"/>
                        </a>
                     </div>
                     <div className=" mt-1 flex-auto  w/-12  md:w-auto md:mr-0  px-0 sm:px-4">
                       <div className="header-height">
                        <CategoriesMenu />
                       </div>
                     </div>
                     <div className="text-base text-right px-0 mt-3" >
                     <Select style={{height: 32 , fontSize: 13}} placeholder="INR" filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          <Option value="jack">INR</Option>
                          <Option value="lucy">USD</Option>
                        <Option value="tom">GBP</Option>
                     </Select>
                     </div>
                     <div class="site-nav">
                     <div className="site-nav__icons">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon header-icon" viewBox="0 0 64 64"><path className="svg-path" d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path></svg>
                     </div>
                         <div className="site-nav__icons">
                          <svg aria-hidden="true" focusable="false" role="presentation" class="icon header-icon" viewBox="0 0 64 64"><path className="svg-path" d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg>
                        </div>
                           <div className="site-nav__icons">
                           <Link href="/basket">
               <a className="p-2 float-left relative">
                  {basket.length > 0 ? (
                     <div className=" float-left w-0 h-full pt-0.5 pl-0.5 -mr-0.5">
                        {basket[0].products.length > 0 ? (
                           <>
                              <div className="  rounded-full    absolute w-1 h-1 right-2 -top-1" >
                                 <Badge size="small" count={basket[0].products.length}>
                                 </Badge>
                              </div>
                           </>
                        ) : (
                           ""
                        )}
                     </div>
                  ) : (
                     ""
                  )}

<svg aria-hidden="true" focusable="false" role="presentation" class="icon header-icon" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="4"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg>
               </a>
            </Link>

                           </div>
                           </div>

               </div>
             </div>
            </div>
            </div>
            </div>

            {/*<div className="  min-h-screen ">
               <Content >{children}</Content>
            </div>
            <Footer
               footerMenu={func.getCategoriesTree(
                  topmenu,
                  "6154a5a279053f941d1b786c"
               )}
            />
            <div className="bg-white">
               <div className="container-custom">
                  <Header />
               </div>
            </div>*/}
            <div className="bg-white min-h-screen ">
               <Content >{children}</Content>
            </div>
            <Footer
               footerMenu={func.getCategoriesTree(
                  topmenu,
                  "6154a5a279053f941d1b786c"
               )}
          />


          { /*<div className="bg-white py-10 footer">

              <div className=" container-custom grid">
                  <Row className="w-full text-center">
                     <Col span={12} offset={6}>
                       <h2>Luxury Fashion</h2>
                     </Col>
                  </Row>
                  <Row className="w-full text-center mt-8">
                     <Col span={12} offset={6}>
                      <h1>84 Saint Lius App, Bhopal, India T. +1234567890
                       E. Info@Luxfashion.Gr </h1>
                     </Col>
                  </Row>
                  <Row className="w-full text-center mt-8 social-name">
                     <Col span={12} offset={6}>
                        <span className="mr-8">instagram</span>
                        <span className="ml-8">facebook</span>

                     </Col>
                  </Row>
                  <Row className="w-full text-center mt-8 find-us-at">
                     <Col span={12} offset={6}>
                       <div>
                         find us at
                       </div>
                     </Col>
                  </Row>
                  <Row className="w-full text-center mt-8 footer-link">
                     <Col span={12} offset={6}>
                        <span className="mr-8">shpping</span>
                        <span className="ml-8">payment methods</span>
                        <span className="ml-8">returns</span>
                        <span className="ml-8">terms & conditions</span>
                        <span className="ml-8">faq`s</span>

                     </Col>
                  </Row>
                  <Row className="w-full text-center mt-8 copy-write">
                     <Col span={12} offset={6}>
                        <span className="mr-8">@copywritefashionhub</span>

                     </Col>
                  </Row>
               </div>
            </div> */  }
         </Layout>
      </>
   );
};

export default AppLayout;
