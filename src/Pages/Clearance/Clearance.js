import React from "react";
import { Link } from "react-router-dom";
import RightSide from "../RightSide/RightSide";
import ClearanceFaQ from "./ClearanceFaQ";

const Clearance = () => {
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
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
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
          <li class="flex items-center text-blue-600">Police Clearance</li>
        </ol>

        <h2 className="text-5xl font-bold text-center">Police Clearance</h2>
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
        <ClearanceFaQ></ClearanceFaQ>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Clearance;
