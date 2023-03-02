import React from "react";
import { Link } from "react-router-dom";
import RightSide from "../RightSide/RightSide";
import NightWorkFaQ from "./NightWorkFaQ";

const NightWork = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-white w-full">
        <div className="flex justify-center mt-16 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>

        <ol class="flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
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
          <li class="flex items-center text-blue-600">Night Work</li>
        </ol>

        <h2 className="text-5xl font-bold text-center">Night Work</h2>
        <div className="text-center mt-12">
          <button className="text-lg bg-lime-400 px-5 py-2 rounded-3xl hover:bg-lime-600 mx-2">
            Access Service
          </button>
          <button className="text-lg bg-slate-300 px-5 py-2 rounded-3xl hover:bg-gray-600 hover:text-white mx-2">
            Follow-Up
          </button>
          <button className="text-lg bg-slate-300 px-5 py-2 rounded-3xl hover:bg-gray-600 hover:text-white mx-2 mb-3">
            FAQs
          </button>
          <button className="text-lg bg-slate-300 px-5 py-2 rounded-3xl hover:bg-gray-600 hover:text-white mx-2">
            Share This Service
          </button>
        </div>
        <NightWorkFaQ></NightWorkFaQ>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NightWork;
