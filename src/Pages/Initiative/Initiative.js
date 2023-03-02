import React from "react";
import RightSide from "../RightSide/RightSide";
import p1 from "../../Media/Initiative/p1.png";
import p2 from "../../Media/Initiative/p2.png";

const Initiative = () => {
  return (
    <div className="flex justify-between bg-white pb-10">
      <div className="w-11/12 md:mt-20 mt-5">
        {/* sec1 */}
        <div className="md:flex items-center">
          <div className="md:p-10 p-2">
            <img className="w-full" src={p1} alt="" />
          </div>
          <div className="md:p-10 p-2">
            <div className="h-[5px] bg-green-400 w-[70px] rounded-full mb-8">

            </div>
            <div className="flex justify-between mb-8">
              <div className="md:mr-28 mr-5">
                <p className="font-bold text-gray-600 flex whitespace-nowrap">Start Date</p>
                <h4 className="text-xl font-bold flex whitespace-nowrap">2022-06-01</h4>
              </div>
              <div>
                <p className="font-bold text-gray-600 flex whitespace-nowrap">End Date</p>
                <h4 className="text-xl font-bold flex whitespace-nowrap">2022-12-31</h4>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Days</p>
              </div>

              <div className="text-bold text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Hours</p>
              </div>

              <div className="text-bold text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Minutes</p>
              </div>

              <div className="text-bold text-gray-600 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg hidden md:block">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Seconds</p>
              </div>

            </div>
            <div>
              <button className="bg-green-400 hover:bg-green-500 font-bold px-7 py-3 text-lg rounded-full mt-8">View All</button>
            </div>
          </div>
        </div>
        {/* sec2 */}
        <div className="md:flex items-center justify-end">
          <div className="md:p-10 p-2 md:hidden flex">
            <img className="w-full" src={p2} alt="" />
          </div>
          <div className="md:p-10 p-2">
            <div className="h-[5px] bg-green-400 w-[70px] rounded-full mb-8">

            </div>
            <div className="flex justify-between mb-8">
              <div className="md:mr-28 mr-5">
                <p className="font-bold text-gray-600 flex whitespace-nowrap">Start Date</p>
                <h4 className="text-xl font-bold flex whitespace-nowrap">2022-06-01</h4>
              </div>
              <div>
                <p className="font-bold text-gray-600 flex whitespace-nowrap">End Date</p>
                <h4 className="text-xl font-bold flex whitespace-nowrap">2022-12-31</h4>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Days</p>
              </div>

              <div className="text-bold text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Hours</p>
              </div>

              <div className="text-bold text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Minutes</p>
              </div>

              <div className="text-bold text-gray-600 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg hidden md:block">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Seconds</p>
              </div>

            </div>
            <div>
              <button className="bg-green-400 hover:bg-green-500 font-bold px-7 py-3 text-lg rounded-full mt-8">View All</button>
            </div>
          </div>
          <div className="md:p-10 p-2 md:flex hidden">
            <img className="" src={p2} alt="" />
          </div>
        </div>
        {/* sec3 */}
        <div className="md:flex items-center">
          <div className="md:p-10 p-2">
            <img className="w-full" src={p1} alt="" />
          </div>
          <div className=" md:p-10 p-2">
            <div className="h-[5px] bg-green-400 w-[70px] rounded-full mb-8">

            </div>
            <div className="flex justify-between mb-8">
              <div className="md:mr-28 mr-5">
                <p className="font-bold text-gray-600 flex whitespace-nowrap">Start Date</p>
                <h4 className="text-xl font-bold flex whitespace-nowrap">2022-06-01</h4>
              </div>
              <div>
                <p className="font-bold text-gray-600 flex whitespace-nowrap">End Date</p>
                <h4 className="text-xl font-bold flex whitespace-nowrap">2022-12-31</h4>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Days</p>
              </div>

              <div className="text-bold text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Hours</p>
              </div>

              <div className="text-bold text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Minutes</p>
              </div>

              <div className="text-bold text-gray-600 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>

              <div className="border w-fit md:px-5 md:py-2 px-2 py-1 rounded-xl shadow-lg hidden md:block">
                <h3 className="text-xl md:text-3xl font-bold">00</h3>
                <p className="text-xs font-bold">Seconds</p>
              </div>

            </div>
            <div>
              <button className="bg-green-400 hover:bg-green-500 font-bold px-7 py-3 text-lg rounded-full mt-8">View All</button>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      <div className="fixed right-0 lg:block hidden">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Initiative;
