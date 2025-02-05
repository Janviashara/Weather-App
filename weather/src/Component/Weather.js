import React, { useEffect, useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";


function Weather() {
 
  return (
    <div className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="mx-auto flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter your city "
          className="border rounded-full w-full p-3 mx-3 mt-6"
         
        />
       <p><IoSearch/></p>
      
      </div>
      
    </div>
  );
}

export default Weather;
