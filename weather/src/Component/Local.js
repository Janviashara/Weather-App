import React, { useEffect, useState } from "react";
import Input from "./Input";

function Local() {
 
  const storedItems = JSON.parse(localStorage.getItem("names")) || [];
  const [names, setName] = useState(storedItems);

  useEffect(() => {
    console.log("Updating localStorage:", names);
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  return (
    <div>
      <h1>Local</h1>
      <Input items={names} setName={setName} />
      <ul>
        {names.map((name ,index)=>(
          <li className="border" key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Local;


