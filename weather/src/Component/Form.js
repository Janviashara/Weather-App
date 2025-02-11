import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ setCity }) {
  const [inputCity, setInputCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("Cloudy");
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindspeed] = useState("");

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const handleAddItem = () => {
    if (inputCity && temperature && weather && humidity && windspeed) {
      const newCityData = {
        city: inputCity,
        temperature: temperature,
        weather: weather,
        humidity: humidity,
        windspeed: windspeed,
      };
      setCity((prevCityData) => {
        const updatedCity = [...prevCityData, newCityData];
        // update localStorage
        localStorage.setItem("city", JSON.stringify(updatedCity));
        return updatedCity;
      });
      setInputCity("");
      setTemperature("");
      setWeather("");
      setHumidity("");
      setWindspeed("");
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <p className="text-xl sm:text-4xl font-bold text-center p-4 text-yellow-400">
        Weather Forecasting
      </p>
      <div className="flex justify-center items-center mt-4">
        <form className="border rounded-md sm:p-3 p-2 m-2 bg-white ">
          <label className="text-base font-semibold">City </label>
          <input
            type="text"
            className="border outline-none p-1 rounded mb-2 w-full"
            value={inputCity}
            ref={inputRef}
            onChange={(e) => setInputCity(e.target.value)}
          />
          <br />
          <label className="text-base font-semibold">Temperature </label>
          <input
            type="number"
            className="border outline-none p-1 rounded mb-2 w-full"
            value={temperature}
            // onChange={(e) => setTemrature(e.target.value)}
            onChange={(e) => {
              let value = e.target.value;
              if (value === "-" || (value >= -99 && value <= 99)) {
                setTemperature(value);
              }
            }}
          />
          <br />
          <label className="text-base font-semibold mr-3 sm:mr-0">
            Weather Condition{" "}
          </label>
          <select
            className="p-1 outline-none border rounded mb-2 w-full "
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            <option value="Cloudy">Cloudy</option>
            <option value="Sunny">Sunny</option>
            <option value="Snow">Snow</option>
            <option value="Rainy">Rainy</option>
            <option value="Thunder">Thunder</option>
            <option value="Wind">Wind</option>
          </select>
          <br />

          <label className="text-base font-semibold">Humidity </label>

          <input
            type="number"
            className="border outline-none p-1 rounded mb-2 w-full"
            value={humidity}
            onChange={(e) => {
              let value = e.target.value;
              if (value === "-" || (value >= -99 && value <= 99)) {
                setHumidity(value);
              }
            }}
          />
          <br />
          <label className="text-base font-semibold">Wind speed </label>

          <input
            type="number"
            className="border outline-none p-1 rounded w-full"
            value={windspeed}
            onChange={(e) => {
              let value = e.target.value;
              if (value === "-" || (value >= -99 && value <= 110)) {
                setWindspeed(value);
              }
            }}
          />
          <br />
          <div className="flex justify-between m-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handleAddItem}
            >
              Submit
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => navigate("/weather")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
