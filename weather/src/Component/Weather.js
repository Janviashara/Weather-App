import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Weather() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="block sm:flex mx-auto">
        <input
          type="text"
          placeholder="Enter your city "
          className="border w-64 sm:w-full rounded-xl p-3 sm:mx-3 mx-2 mt-6 outline-none"
          ref={inputRef}
        />
        <Link to={"/localstorage"}>
          <button className="border w-auto rounded-xl bg-white p-3 mt-6 mx-2 sm:mx-3 ">
            Add{" "}
          </button>
        </Link>
      </div>

      <div className=" m-4">
        <table className="border flex justify-around">
          <tr className="flex justify-evenly">
              <th>No.</th>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Weather Condition</th>
              <th>Wind speed</th>
              <th>Update</th>
              <th>Delete</th>
              </tr>
        </table>
      </div>
    </div>
  );
}

export default Weather;
{
  /* <th>No.</th>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Weather Condition</th>
              <th>Wind speed</th>
              <th>Update</th>
              <th>Delete</th> */
}
