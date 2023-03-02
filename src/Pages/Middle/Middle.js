import React from "react";
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <div className="w-100">
      <h3 className="flex justify-center whitespace-nowrap text-white text-4xl font-bold mb-3 text-center">
        Your Security Our Happiness
      </h3>
      <p className="text-center text-white text-xl">Smart Secure Together</p>
      <form className="mt-20 mb-20 flex justify-center">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-[300px] hover:w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300  focus:ring-blue-500 focus:border-blue-500  rounded-3xl"
            placeholder="Search Mockups, Logos..."
          />
        </div>
      </form>
      <div className="flex h-36 items-center align-middle">
        <div className="p-5 w-[220px] h-[180px] mx-2 hover:w-[290px] hover:h-[220px] bg-white rounded-3xl hover:p-10 hover:text-green-500 shadow-xl">
          <p className="flex justify-center text-2xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </p>
          <p className="mt-3 text-center text-lg">Fines & Payment</p>
          <p className="mt-3 flex justify-center">
            <Link to='/fines' className="bg-lime-600 btn w-full px-3 py-1 text-lg rounded-3xl text-black text-center">
              Open
            </Link>
          </p>
        </div>

        <div className="p-5 w-[220px] h-[180px] mx-2 hover:w-[290px] hover:h-[220px] bg-white rounded-3xl hover:p-10 hover:text-green-500 shadow-xl">
          <p className="flex justify-center text-2xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </p>
          <p className="mt-3 text-center text-lg">Home Security</p>
          <p className="mt-3 flex justify-center">
          <Link to='/security' className="bg-lime-600 btn w-full px-3 py-1 text-lg rounded-3xl text-black text-center">
              Open
            </Link>
          </p>
        </div>

        <div className="p-5 w-[220px] h-[180px] mx-2 hover:w-[290px] hover:h-[220px] bg-white rounded-3xl hover:p-10 hover:text-green-500 shadow-xl">
          <p className="flex justify-center text-2xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
              />
            </svg>
          </p>
          <p className="mt-3 text-center text-lg">Lost Item Certificate</p>
          <p className="mt-3 flex justify-center">
          <Link to='/lostitem' className="bg-lime-600 btn w-full px-3 py-1 text-lg rounded-3xl text-black text-center">
              Open
            </Link>
          </p>
        </div>

        <div className="p-5 w-[220px] h-[180px] mx-2 hover:w-[290px] hover:h-[220px] bg-white rounded-3xl hover:p-10 hover:text-green-500 shadow-xl">
          <p className="flex justify-center text-2xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </p>
          <p className="mt-3 text-center text-lg">Night Work</p>
          <p className="mt-3 flex justify-center">
          <Link to='/nightwork' className="bg-lime-600 btn w-full px-3 py-1 text-lg rounded-3xl text-black text-center">
              Open
            </Link>
          </p>
        </div>

        <div className="p-5 w-[220px] h-[180px] mx-2 hover:w-[250px] hover:h-[220px] bg-white rounded-3xl hover:p-10 hover:text-green-500 shadow-xl">
          <p className="flex justify-center text-2xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </p>
          <p className="mt-3 text-center text-lg">Police Clearance</p>
          <p className="mt-3 flex justify-center">
          <Link to='/clearance' className="bg-lime-600 btn w-full px-3 py-1 text-lg rounded-3xl text-black text-center">
              Open
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
