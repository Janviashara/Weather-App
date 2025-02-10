import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Weather() {
  const [cities, setCities] = useState([]); //hold city and weather data
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({
    city: "",
    temperature: "",
    humidity: "",
    weather: "",
    windspeed: "",
  });
  const [search, setSearch] = useState("");
  // console.log(cities.filter(city=>city.city.toLowerCase().includes("rajkot")))
  // const  keys = ["city"]
  // console.log(cities[1]["city"])

 
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const CityData = JSON.parse(localStorage.getItem("city")) || [];
    setCities(CityData);
  }, []);

  const toggleForm = (index) => {
    if (index !== null) {
      setFormData({ ...cities[index] });
    }
    setSelectedCity(index); // new data set
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const updatedCities = [...cities];
    updatedCities[selectedCity] = formData;
    setCities(updatedCities);
    localStorage.setItem("city", JSON.stringify(updatedCities));
    setSelectedCity(null); //form hide
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="block sm:flex mx-auto">
        <input
          type="search"
          placeholder="Enter your city"
          className="border w-64 sm:w-full rounded-xl p-3 sm:mx-3 mx-2 mt-6 outline-none"
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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

      <div className="overflow-x-auto p-2 ">
        <table className="w-full border">
          <thead className="bg-gray-300">
            <tr className="text-center">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Temperature</th>
              <th className="px-4 py-3">Weather Condition</th>
              <th className="px-4 py-3">Humidity</th>
              <th className="px-4 py-3">Wind Speed</th>
              <th className="px-4 py-3">Update</th>
              <th className="px-4 py-3">Delete</th>
            </tr>
          </thead>
         
          <tbody>
         
            {cities.filter((city) =>city.city.toLowerCase().includes(search.toLowerCase())).length === 0 ? 
             //.filter((city) => city.toLowerCase().includes(search.toLowerCase()))
            ( <p className="font-bold text-2xl p-1 text-nowrap">Enter valid city</p>) :
             (cities
              .filter((city) =>city.city.toLowerCase().includes(search.toLowerCase()))
               .map((city, index) => (
                <tr
                  key={index}
                  className="text-center border even:bg-gray-200 odd:bg-slate-100"
                >
                  
                  <td>{index}</td>
                  <td>{city.city}</td>
                  <td>{city.temperature}°C</td>
                  <td>{city.weather}</td>
                  <td>{city.humidity}%</td>
                  <td>{city.windspeed} km/h</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-600 p-2 rounded-lg text-white"
                      onClick={() => toggleForm(index)}
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
                        localStorage.setItem(
                          "city",
                          JSON.stringify(updatedCity)
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )))}
          </tbody>
        </table>
      </div>

      {selectedCity !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black  bg-opacity-50 transition-opacity duration-300">
          <div className="w-full sm:w-96 bg-white rounded-lg shadow-lg p-6 transform duration-300 scale-100">
            <p className="text-xl sm:text-4xl font-bold text-center m-2 sm:m-6 text-yellow-400">
              Update Weather Data
            </p>

            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  !formData.city ||
                  !formData.temperature ||
                  !formData.humidity ||
                  !formData.windspeed
                ) {
                  alert("All fields are required!");
                  return;
                }
              }}
            >
              <label className="text-base font-semibold text-gray-700">
                City{" "}
              </label>
              <input
                type="text"
                name="city"
                value={formData.city || ""} //hold to the current data
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <br />
              <label className="text-base font-semibold text-gray-700">
                Temperature
              </label>
              <input
                type="number"
                name="temperature"
                max={2}
                min={1}
                value={formData.temperature || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg m-1"
              />
              <br />
              <label className="text-base font-semibold text-gray-700">
                Weather Condition
              </label>
              <select
                name="weather"
                value={formData.weather}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg m-1"
              >
                <option value="Cloudy">Cloudy</option>
                <option value="Sunny">Sunny</option>
                <option value="Snow">Snow</option>
                <option value="Rainy">Rainy</option>
                <option value="Thunder">Thunder</option>
                <option value="Wind">Wind</option>
              </select>
              <br />
              <label className="text-base font-semibold text-gray-700">
                Humidity
              </label>
              <input
                type="number"
                name="humidity"
                value={formData.humidity || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg m-1"
              />
              <br />
              <label className="text-base font-semibold text-gray-700">
                Wind Speed
              </label>
              <input
                type="number"
                name="windspeed"
                value={formData.windspeed || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg m-1"
              />
              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  onClick={handleUpdate}
                  className="bg-indigo-600 text-white sm:p-3 p-2 rounded-lg hover:bg-indigo-700 w-full sm:w-auto"
                >
                  Save & Update
                </button>
                <button
                  onClick={() => toggleForm(null)}
                  className="bg-gray-300 text-gray-800 sm:p-3 p-2 rounded-lg hover:bg-gray-400 w-full sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
