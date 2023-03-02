import { Carousel } from "flowbite-react";
import React from "react";
import Middle from "../Middle/Middle";
import RightSide from "../RightSide/RightSide";
import Slider from "../Slider/Slider";

import p1 from "../../Media/slider-img/p1.jpg";
import p2 from "../../Media/slider-img/p2.jpg";
import p3 from "../../Media/slider-img/p3.jpg";
import p4 from "../../Media/slider-img/p4.jpg";
import p5 from "../../Media/slider-img/p5.jpg";


const Home = () => {
  return (
    <div>
      <div className="lg:flex block justify-between">
        <Slider></Slider>
        <div className="lg:block hidden">
          <RightSide></RightSide>
        </div>
      </div>
      <div className="fixed bottom-52 left-[0px] right-[45px] lg:flex hidden justify-center align-middle">
        <Middle></Middle>
      </div>
      <div className="lg:hidden block">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img src={p1} alt="..." />
            <img src={p2} alt="..." />
            <img src={p3} alt="..." />
            <img src={p4} alt="..." />
            <img src={p5} alt="..." />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
