import { Carousel } from "flowbite-react";
import React from "react";
import p1 from '../../Media/slider-img/p1.jpg'
import p2 from '../../Media/slider-img/p2.jpg'
import p3 from '../../Media/slider-img/p3.jpg'
import p4 from '../../Media/slider-img/p4.jpg'
import p5 from '../../Media/slider-img/p5.jpg'

const Slider = () => {
  return (
    <div className="w-full hidden lg:block lg:h-100">
    <Carousel>
      <img
        className="w-full"
        src={p1}
        alt="..."
      />
      <img
        className="w-full"
        src={p2}
        alt="..."
      />
      <img
        className="w-full"
        src={p3}
        alt="..."
      />
      <img
        className="w-full"
        src={p4}
        alt="..."
      />
      <img
        className="w-full"
        src={p5}
        alt="..."
      />
    </Carousel>
  </div>
  );
};

export default Slider;
