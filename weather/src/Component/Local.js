
import React, { useEffect, useState } from "react";
import Input from "./Input";

function Local() {
 
  const storedItems = JSON.parse(localStorage.getItem("names")) || [];
  const [names, setName] = useState(storedItems);
  const [search , setSearch] = useState('')
  

  useEffect(() => {
    console.log("Updating localStorage:", names);
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  return (
    <div>
      <h1>Local</h1>
      <Input items={names} setName={setName} />

      <div>
        <input type="search" 
        className="border m-2 p-2 border-black" 
        placeholder="search"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}/>
      </div>

      <ul>
        {names.filter((name) =>
          name.toLowerCase().includes(search.toLowerCase())  //includes - if specific string is there return true
        ).length === 0 ? (
          <li>Data is not found</li>
        ) : (
          names
            .filter((name) => name.toLowerCase().includes(search.toLowerCase()))  
            .map((name, index) => (
              <li className="text-center border" key={index}>
                {name}
              </li>
            ))
        )}
      </ul>
    </div>
  );
}
{/* <ul>
        {names
          .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
          .map((name, index) => (
            <li className="text-center border" key={index}>{name}</li>
          ))}
      </ul> */}
export default Local;


      