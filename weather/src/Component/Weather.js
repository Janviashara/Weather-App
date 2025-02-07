import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Weather() {
  const [cities, setCities] = useState([]); // Holds the city and weather data
  const [selectedCityIndex, setSelectedCityIndex] = useState(null); 
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const CityData = JSON.parse(localStorage.getItem("(city)")) || []; // Empty array is used as a fallback value
    setCities(CityData);
  }, []);

  const toggleForm = (index) => {
    setSelectedCityIndex(index === selectedCityIndex ? null : index); 
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="block sm:flex mx-auto">
        <input
          type="text"
          placeholder="Enter your city"
          className="border w-64 sm:w-full rounded-xl p-3 sm:mx-3 mx-2 mt-6 outline-none"
          ref={inputRef}
        />
        <Link to={"/localstorage"}>
          <button className="border w-auto rounded-xl bg-white p-3 mt-6 mx-2 sm:mx-3">
            Add
          </button>
        </Link>
      </div>

      <p className="text-xl sm:text-4xl font-bold text-center m-2 sm:m-6 text-yellow-400">
        Weather Forecasting Data
      </p>

      <div className="m-3 overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-300">
            <tr className="text-center">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Temperature</th>
              <th className="px-4 py-3">Humidity</th>
              <th className="px-4 py-3">Weather Condition</th>
              <th className="px-4 py-3">Wind Speed</th>
              <th className="px-4 py-3">Update</th>
              <th className="px-4 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, index) => (
              <tr
                key={index}
                className="text-center border even:bg-gray-200 odd:bg-slate-100"
              >
                <td>{index}</td>
                <td>{city.city}</td>
                <td>{city.temperature}°C</td>
                <td>{city.humidity}%</td>
                <td>{city.weather}</td>
                <td>{city.windspeed} km/h</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-blue-600 p-2 rounded-lg text-white"
                    onClick={() => toggleForm(index)} // Show form when clicked
                  >
                    Update
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-red-600 p-2 rounded-lg"
                    onClick={() => {
                      const updatedCity = [...cities]; // Create a copy of the array
                      updatedCity.splice(index, 1);
                      setCities(updatedCity);
                      localStorage.setItem("(city)", JSON.stringify(updatedCity));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      {selectedCityIndex !== null && (
        <div className="flex justify-center items-center flex-col px-4 py-6 sm:px-8">
          <p className="text-xl sm:text-4xl font-bold text-center m-2 sm:m-6 text-yellow-400">
            Weather Forecasting Data
          </p>

          <div
            className={`w-full sm:w-96 bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out transform ${
              selectedCityIndex !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <table className="w-full">
              <tbody>
             
                <tr className="mb-4">
                  <td className="text-sm font-semibold text-gray-700">City:</td>
                  <td>
                    <input
                      type="text"
                      defaultValue={cities[selectedCityIndex].city} details
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter City Name"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="text-sm font-semibold text-gray-700">Temperature:</td>
                  <td>
                    <input
                      type="number"
                      defaultValue={cities[selectedCityIndex].temperature} 
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter Temperature in °C"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="text-sm font-semibold text-gray-700">Weather Condition:</td>
                  <td>
                    <select
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      defaultValue={cities[selectedCityIndex].weather} 
                    >
                      <option value="Cloudy">Cloudy</option>
                      <option value="Sunny">Sunny</option>
                      <option value="Snow">Snow</option>
                      <option value="Rainy">Rainy</option>
                      <option value="Thunder">Thunder</option>
                      <option value="Wind">Wind</option>
                    </select>
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="text-sm font-semibold text-gray-700">Humidity:</td>
                  <td>
                    <input
                      type="number"
                      defaultValue={cities[selectedCityIndex].humidity} 
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter Humidity Percentage"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="text-sm font-semibold text-gray-700">Wind Speed:</td>
                  <td>
                    <input
                      type="number"
                      defaultValue={cities[selectedCityIndex].windspeed} // Pre-fill wind speed
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter Wind Speed in km/h"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 w-full sm:w-auto text-center"
              >
                Save & Update
              </button>
              <button
                onClick={() => toggleForm(null)} 
                className="bg-gray-300 text-gray-800 p-3 rounded-lg hover:bg-gray-400 w-full sm:w-auto text-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
