import { Carousel } from "flowbite-react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import Middle from "../Pages/Middle/Middle";

import i1 from '../Media/sm-footer-img/p1.png'
import i2 from '../Media/sm-footer-img/p3.png'
import i3 from '../Media/sm-footer-img/p4.png'
import i4 from '../Media/sm-footer-img/p5.png'
import i5 from '../Media/sm-footer-img/p6.png'
import i6 from '../Media/sm-footer-img/p7.svg'
import i7 from '../Media/sm-footer-img/p8.svg'
import i8 from '../Media/sm-footer-img/p9.svg'
import HeaderIcon from "../Pages/HederIcon/HeaderIcon";

const Main = () => {
  return (
    <div className="lg:h-screen bg-gray-200">
      <div className="fixed top-0 w-full">
        <HeaderIcon></HeaderIcon>
      </div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
        <div className="w-full fixed bottom-0">
          <Footer></Footer>
        </div>
        
      </div>
      {/* Small Device Carasolo */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-12 gap-2 w-full">
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i1} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i2} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i3} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i4} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i5} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i6} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i7} alt="" />
            </div>
            <div className="col-span-6 w-full justify-center flex p-2">
                <img className="w-6/12" src={i8} alt="" />
            </div>
        </div>

        <footer className="text-center bg-slate-400 text-gray-700 py-10 px-5 text-xs">
            <p>Copyright © 2021-22 Dubai Police, all rights reserved</p>
            <p>This site is monitored and maintained by Dubai Police</p>
            <p>The site is best viewed using IE11 and above, Mozilla Firefox, Safari and Chrome</p>
            <p>Last modified Date: 02-01-2023</p>
        </footer>
      </div>

    </div>
  );
};

export default Main;
