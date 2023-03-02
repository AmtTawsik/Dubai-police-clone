import React from "react";
import { Link } from "react-router-dom";
import RightSide from "../RightSide/RightSide";
import SecurityFaQ from "./SecurityFaQ";

const Security = () => {
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
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
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
          <li class="flex items-center text-blue-600">Home Security</li>
        </ol>

        <h2 className="text-5xl font-bold text-center">Home Security</h2>
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
        <SecurityFaQ></SecurityFaQ>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Security;
