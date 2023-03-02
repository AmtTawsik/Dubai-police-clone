import { Carousel } from "flowbite-react";
import React from "react";
import RightSide from "../RightSide/RightSide";
import p11 from "../../Media/sl1/p11.jpg";
import p12 from "../../Media/sl1/p12.jpg";
import p13 from "../../Media/sl1/p13.jpg";

import p21 from "../../Media/sl2/p21.jpg";
import p22 from "../../Media/sl2/p22.jpg";
import p23 from "../../Media/sl2/p23.jpg";

import p31 from "../../Media/sl3/p31.jpg";
import p32 from "../../Media/sl3/p32.jpg";
import p33 from "../../Media/sl3/p33.jpg";
import { Link } from "react-router-dom";

import c1 from "../../Media/card-img/p1.jfif";
import c2 from "../../Media/card-img/p2.jfif";
import c3 from "../../Media/card-img/p3.jpg";
import c4 from "../../Media/card-img/p4.jpg";
import c5 from "../../Media/card-img/p5.jpg";

import t1 from '../../Media/three/p1.jpg'
import t2 from '../../Media/three/p3.png'

import d1 from '../../Media/last3/d1.jfif'
import d2 from '../../Media/last3/d2.jpg'
import d3 from '../../Media/last3/d3.jfif'

const Media = () => {
  return (
    <div className="flex justify-between bg-white">
      <div className="w-11/12">
        <ol class="flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mt-16">
          <li class="flex items-center ">
            <Link to="/">Home</Link>
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li class="flex items-center text-blue-600">Media Center</li>
        </ol>
        <h2 className="text-5xl text-center font-bold">Media Center</h2>
        <div className="h-56 sm:h-64 md:h-80  mt-4 md:flex hidden">
          <Carousel>
            <div className="flex h-full items-center justify-center dark:text-white">
              <div className="grid grid-cols-12 gap-5 ml-10 pb-10">
                <img className="col-span-4 h-full" src={p11} alt="" />
                <img className="col-span-4 h-full" src={p12} alt="" />
                <img className="col-span-4 h-full" src={p13} alt="" />
              </div>
            </div>

            <div className="flex h-full items-center justify-center dark:text-white">
              <div className="grid grid-cols-12 gap-5 ml-10 pb-10">
                <img className="col-span-4 h-full" src={p21} alt="" />
                <img className="col-span-4 h-full" src={p22} alt="" />
                <img className="col-span-4 h-full" src={p23} alt="" />
              </div>
            </div>

            <div className="flex h-full items-center justify-center dark:text-white">
              <div className="grid grid-cols-12 gap-5 ml-10 pb-10">
                <img className="col-span-4 h-full" src={p31} alt="" />
                <img className="col-span-4 h-full" src={p32} alt="" />
                <img className="col-span-4 h-full" src={p33} alt="" />
              </div>
            </div>
          </Carousel>
        </div>
        <h2 className="text-3xl font-bold mb-5 ml-10">LATEST NEWS</h2>
        {/* Cards */}
        <div className="mb-16 grid grid-cols-12 gap-10 lg:ml-10 w-full">
          <div class="max-w-sm w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:col-span-4 md:col-span-6 col-span-12">
            <Link href="#">
              <img class="rounded-t-lg h-[350px] w-full" src={c1} alt="" />
            </Link>
            <div class="p-5">
              <p>Monday, January 2, 2023</p>
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dubai Police Academy receives IPSA Inte...
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          <div class="max-w-sm w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:col-span-4 md:col-span-6 col-span-12">
            <Link href="#">
              <img class="rounded-t-lg h-[350px] w-full" src={c2} alt="" />
            </Link>
            <div class="p-5">
              <p>Monday, January 2, 2023</p>
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dubai Police Academy receives IPSA Inte...
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          <div class="max-w-sm w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:col-span-4 md:col-span-6 col-span-12">
            <Link href="#">
              <img class="rounded-t-lg h-[350px] w-full" src={c3} alt="" />
            </Link>
            <div class="p-5">
              <p>Monday, January 2, 2023</p>
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dubai Police Academy receives IPSA Inte...
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          <div class="max-w-sm w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:col-span-4 md:col-span-6 col-span-12">
            <Link href="#">
              <img class="rounded-t-lg h-[350px] w-full" src={c4} alt="" />
            </Link>
            <div class="p-5">
              <p>Monday, January 2, 2023</p>
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dubai Police Academy receives IPSA Inte...
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          <div class="max-w-sm w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:col-span-4 md:col-span-6 col-span-12">
            <Link href="#">
              <img class="rounded-t-lg h-[350px] w-full" src={c5} alt="" />
            </Link>
            <div class="p-5">
              <p>Monday, January 2, 2023</p>
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dubai Police Academy receives IPSA Inte...
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>

        {/* three */}

        <div className="md:flex justify-between ml-8 ">
            <div className="rounded-3xl ">
                <img className="w-full md:w-[700px] md:h-[320px] md:p-5 rounded-3xl" src={t1} alt="" />
            </div>
            <div className="p-5">
                <p>March 7, 2023 to March 9, 2023</p>
                <h4 className="text-3xl font-bold my-5">The World Police</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque molestiae.</p>
            </div>
            <div>
                <img src={t2} alt="" />
            </div>
        </div>
        <h3 className="my-3 text-3xl font-bold ml-12">Photos & Videos</h3>
        <div className="md:flex ml-10 mb-20">
            <img className="md:w-[450px] w-100 px-3 rounded-2xl mb-5" src={d1} alt="" />
            <img className="md:w-[450px] w-100 px-3 rounded-2xl mb-5" src={d2} alt="" />
            <img className="md:w-[450px] w-100 px-3 rounded-2xl mb-5" src={d3} alt="" />
        </div>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Media;
