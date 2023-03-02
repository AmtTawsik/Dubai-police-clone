import React from "react";
import { Link } from "react-router-dom";
import RightSide from "../RightSide/RightSide";
import p1 from "../../Media/services/p1.png";
import p2 from "../../Media/services/p2.png";
import p3 from "../../Media/services/p3.png";
import p4 from "../../Media/services/p4.png";
import p5 from "../../Media/services/p5.png";

const Services = () => {
  return (
    <div className="flex justify-between bg-white pb-10">
      <div className="w-full mt-16">
        <ol class="flex justify-center items-center p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
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
          <li class="flex items-center text-blue-600">Home Security</li>
        </ol>
        <h2 className="text-center text-5xl font-bold">Services</h2>
        <div className="grid grid-cols-12 w-11/12 mx-auto mt-5 items-center">
          <div className="md:col-span-6 col-span-12">
            <img src={p1} alt="" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <h3 className="flex justify-center w-full text-3xl font-bold mb-5">
              Reports Services
            </h3>
            <div className="flex mt-10">

              <div className="flex flex-col items-center md:mx-8 justify-center">
                <div className="bg-green-400 w-fit p-2 rounded-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                </div>
                <p className="flex md:whitespace-nowrap">HQ Entry Permit</p>
              </div>


              <div className="flex flex-col items-center md:mx-8 justify-center">
                <div className="bg-green-400 w-fit p-2 rounded-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                </div>
                <p className="flex md:whitespace-nowrap">Public Tenders</p>
              </div>


              <div className="flex flex-col items-center md:mx-8 justify-center">
                <div className="bg-green-400 w-fit p-2 rounded-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                </div>
                <p className="flex md:whitespace-nowrap">Job Vacancies</p>
              </div>


              <div className="flex flex-col items-center md:mx-8 justify-center">
                <div className="bg-green-400 w-fit p-2 rounded-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                </div>
                <p className="flex md:whitespace-nowrap">Virtual Museum</p>
              </div>

            </div>
            <div className="text-center mt-10">
            <button className="bg-green-400 hover:bg-green-500 px-7 py-2.5 rounded-full text-lg font-bold">View All</button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Services;
