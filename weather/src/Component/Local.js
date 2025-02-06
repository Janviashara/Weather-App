
import React, { useEffect, useState } from "react";
import Input from "./Input";

function Local() {
 
  const [names, setName] = useState([]);
  useEffect(() => {
      const localStorageItems = JSON.parse(localStorage.getItem('items'));
      console.log(localStorageItems);
      if (localStorageItems) {
          setItems(localStorageItems);
      }
  }, []);
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
