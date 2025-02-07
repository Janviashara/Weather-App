import React from "react";
import cloud from "./cloud.png";
import { Link } from "react-router-dom";
 
// first page 

function Home() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col justify-center items-center h-full">
          <div>
            <img src={cloud} alt="cloud" className="h-auto" />
          </div>
          <div className="">
            <p className="font-bold sm:text-4xl text-2xl text-center">
              Weather{" "}
              <span className="font-bold sm:text-4xl text-2xl text-yellow-400 ">
                ForeCast
              </span>
            </p>
          </div>
          <Link to="/weather">
            <button className=" mt-8 py-2 sm:py-3 sm:px-16 px-6 rounded-full font-bold sm:text-3xl text-sm text-black bg-yellow-400 border-none">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
