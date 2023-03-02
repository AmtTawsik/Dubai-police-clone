import React from "react";
import { Link } from "react-router-dom";
import RightSide from "../RightSide/RightSide";
import LostItemFaQ from "./LostItemFaQ";

const LostItem = () => {
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
              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
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
          <li class="flex items-center text-blue-600">
            Lost Item Certificate
          </li>
        </ol>

        <h2 className="text-5xl font-bold text-center">
          Lost Item Certificate
        </h2>
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
        <LostItemFaQ></LostItemFaQ>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default LostItem;
