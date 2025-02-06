import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ items, setCity }) {
  const [inputCity, setInputCity] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const handleAddItem = () => {
    if (inputCity) {
      setCity([...items, inputCity]);
      setInputCity("");
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
      <div className="flex justify-center items-center mt-4 ">
        <form className="border rounded-md sm:p-3 m-2 sm:m-0 bg-white ">
          <table className="m-2">
            <tbody>
              <tr>
                <td className="p-2">
                  <label className="text-xs sm:text-base font-semibold">
                    City :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="border outline-none p-1 rounded"
                    value={inputCity}
                    ref={inputRef}
                    onChange={(e) => setInputCity(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label className="text-xs sm:text-base font-semibold">
                    Temperature :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="border outline-none p-1 rounded"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label className="text-xs sm:text-base font-semibold">
                    Humidity :
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="border outline-none p-1 rounded"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label className="text-xs sm:text-base font-semibold">
                    Weather Condition :
                  </label>
                </td>
                <td>
                  <select className="p-1 outline-none border rounded w-full">
                    <option>Cloudy</option>
                    <option>Sunny</option>
                    <option>Snow</option>
                    <option>Rainy</option>
                    <option>Thunder</option>
                    <option>Wind</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label className="text-xs sm:text-base font-semibold">
                    Wind speed :
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="border outline-none p-1 rounded"
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
