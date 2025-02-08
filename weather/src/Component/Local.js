import React, { useEffect, useState } from "react";
import Input from "./Input";

function Local() {
 
  const storedItems = JSON.parse(localStorage.getItem("names")) || [];
  const [names, setName] = useState(storedItems);

  const [records , setRecords] = useState(names)
  const handleSearch= (e) =>{
    let query = e.target.value;
    const newrecords = names.filter(item => item.city.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setRecords(newrecords)
}
  useEffect(() => {
    console.log("Updating localStorage:", names);
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  return (
    <div>
      <h1>Local</h1>
      <Input items={records} setName={setName} />
      <input type = "search" 
       placeholder='serach your name'
       className='m-2 border p-2 border-black' 
       onChange={handleSearch}/>

      <ul>
        {names.map((name ,index)=>(
          <li className="border" key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Local;


