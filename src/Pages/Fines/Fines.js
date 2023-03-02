import React from "react";
import { Link } from "react-router-dom";
import RightSide from "../RightSide/RightSide";
import FinesFaQ from "./FinesFaQ";

const Fines = () => {
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
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
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
            Fines Inquiry and Payment
          </li>
        </ol>

        <h2 className="text-5xl font-bold text-center">
          Fines Inquiry and Payment
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
        <FinesFaQ></FinesFaQ>
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Fines;
