import React, { useState, useRef, useEffect } from 'react';
import AuthService from "../../../util/services/authservice";
import { useDispatch, useSelector } from "react-redux";
import { login_r, isAuthenticated_r, logout_r } from "../../../redux/actions";
import { Input, Modal, Form, message, Badge,Select } from "antd";
import router from "next/router";
import Link from "next/link";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import dynamic from "next/dynamic";
const { Option } = Select;
const CategoriesMenu = dynamic(() => import("../../components/CategoriesMenu"));
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
import { API_URL, IMG_URL } from "../../../../config";
import axios from "axios";
import { removeCookies, setCookies } from "cookies-next";


const Default = () => {
   const [form] = Form.useForm();
   const { settings } = useSelector(({ settings }) => settings);
   const { basket } = useSelector((state) => state.basket);
   const { isAuthenticated } = useSelector(({ login }) => login);
   const [openModalLogin, seTopenModalLogin] = useState(false);
   const [confirmLoadingLogin, seTconfirmLoadingLogin] = useState(false);
   const [openModalSignup, seTopenModalSignup] = useState(false);
   const [confirmLoadingSignup, seTconfirmLoadingSignup] = useState(false);
   const [stateisAuthenticated, seTstateisAuthenticated] = useState(false);

   const dispatch = useDispatch();


   const onSubmitSignup = (Data) => {
      Data["username"] = Data.username.toLowerCase();

      axios
         .post(`${API_URL}/users/register`, Data)
         .then((res) => {
            if (res.data.error) {
               message.error(res.data.messagge);
            } else {
               form.resetFields();
               message.success(res.data.messagge);
               onSubmitLogin(Data);
            }
         })
         .catch((err) => console.log("err", err));
   };

   const onSubmitLogin = (Data) => {
      Data["username"] = Data.username.toLowerCase();
      AuthService.login(Data).then((data) => {
         const { isAuthenticated, user } = data;
         if (isAuthenticated) {
            dispatch(login_r(user));
            dispatch(isAuthenticated_r(true));
            message.success("Login Successfully");
            seTopenModalLogin(false);
            seTopenModalSignup(false);
            setCookies("isuser", true);
         } else {
            message.error("Login not Successfully");
         }
      });
   };

   useEffect(() => {
      if (isAuthenticated) {
         seTstateisAuthenticated(isAuthenticated);
      }


   }, [isAuthenticated]);

   return (


      <div className="w-full flex justify-between">
        <div className=" text-base text-right px-0 ">
                      <a href="/">
                           <img src="images/logo.png" alt="Logo" className="img-top"/>
                        </a>
                     </div>
                     <div className=" flex-auto  w-3/12 mr-3 md:w-auto md:mr-0    mt-6  px-0 sm:px-12">
            <Input.Search
               size="middle"
               placeholder="Search..."
               enterButton
               className="sm:px-10 "


               onSearch={(val) => {
                  router.push("/search?&text=" + val);
               }}
            />
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
         <div className=" mt-5 site-nav  text-base text-right px-0  ">
            {stateisAuthenticated ? (
               <>
                  {/* <Link href="/profile">
                     <span className="p-2 float-left cursor-pointer hover:text-brand-color">
                        <UserOutlined />
                        <span className="hidden md:inline "> Profile</span>
                     </span>
                  </Link> */}
                  <span
                     className="p-2 float-left cursor-pointer hover:text-brand-color"
                     onClick={async () => {
                        await AuthService.logout();
                        await dispatch(logout_r());
                        seTstateisAuthenticated(false);
                        removeCookies("isuser");
                        router.push("/");
                     }}
                  >
                     <LogoutOutlined />
                     <span className="hidden md:inline  "> Logout </span>
                  </span>
               </>
            ) : (
               <>
                  <span
                     className="p-2 float-left cursor-pointer hover:text-brand-color"
                     onClick={() => seTopenModalLogin(true)}
                  >

                      <div className="site-nav__icons">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon header-icon" viewBox="0 0 64 64"><path className="svg-path" d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path></svg>
                     </div>
                     {/*<span className="hidden md:inline ">Login</span>*/}
                  </span>
                  <span
                     className="p-2 float-left cursor-pointer hover:text-brand-color"
                     onClick={() => seTopenModalSignup(true)}
                  >
                       <div className="site-nav__icons">
                          <svg aria-hidden="true" focusable="false" role="presentation" class="icon header-icon" viewBox="0 0 64 64"><path className="svg-path" d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg>
                        </div>
                     {/*<span className="hidden md:inline ">Sign Up</span>*/}
                  </span>
               </>
            )}
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
                        <div className="site-nav__icons">
                              <svg aria-hidden="true" focusable="false" role="presentation" class="icon header-icon" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="4"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg>
                        </div>

                  {/*<span className="hidden md:inline "> Basket</span>*/}
               </a>
            </Link>
         </div>
         {/*<div style={{display: 'flex',justifyContent: 'space-between',marginTop:'1.5em',fontSize:'18px'}} className=" w-4/12 mr-3 md:w-4/12 md:mr-0  mt-4 md:mt-2 lg:mt-3">
            <span>Designers</span>
            <span>Clothing</span>
            <span>wedding</span>
         </div>
         <div className="text-center w-10/12 mr-3 md:w-10/12 md:mr-0  mt-4 md:mt-2 lg:mt-3">
           <a href="/">


            <h1>Luxury Fashion</h1>
            </a>
         </div>
         <div style={{display: 'flex',justifyContent: 'space-between'}} className="text-center w-2/12 mr-3 md:w-2/12 md:mr-0  mt-4 md:mt-2 lg:mt-3">
            <div className="float-left cursor-pointer hover:text-brand-color">
               <SearchOutlined/>
            </div>
            <div className="float-left cursor-pointer hover:text-brand-color">
               <HeartOutlined/>
            </div>
            <div className="float-left cursor-pointer hover:text-brand-color">
               <LockOutlined/>
            </div>
         </div>*/}
         <Modal
            title="Login"
            visible={openModalLogin}
            onOk={() => seTconfirmLoadingLogin(true)}
            confirmLoading={confirmLoadingLogin}
            onCancel={() => seTopenModalLogin(false)}
            footer={null}
         >
            <LoginForm
               onSubmitLogin={onSubmitLogin}
               handleCancelLogin={() => seTopenModalLogin(false)}
            />
         </Modal>

         <Modal
            title="Signup"
            visible={openModalSignup}
            onOk={() => seTconfirmLoadingSignup(true)}
            confirmLoading={confirmLoadingSignup}
            onCancel={() => seTopenModalSignup(false)}
            footer={null}
         >
            <RegisterForm onSubmitSignup={onSubmitSignup} />
         </Modal>
      </div>
   );
};

export default Default;
