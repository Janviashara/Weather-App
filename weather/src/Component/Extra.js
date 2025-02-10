// Local.js
// import React, { useEffect, useState } from "react";
// import Input from "./Input";

// function Local() {
 
//   const storedItems = JSON.parse(localStorage.getItem("names")) || [];
//   const [names, setName] = useState(storedItems);

//   useEffect(() => {
//     console.log("Updating localStorage:", names);
//     localStorage.setItem("names", JSON.stringify(names));
//   }, [names]);

//   return (
//     <div>
//       <h1>Local</h1>
//       <Input items={names} setName={setName} />
//       <ul>
//         {names.map((name ,index)=>(
//           <li className="border" key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Local;
// {/* <ul className="task-list">
// {tasks.map((task, index) => (
//   <li key={index} className={task.completed ? 'task completed' : 'task'}>
//     <span onClick={() => toggleTask(index)}>{task.text}</span>
//     <button onClick={() => deleteTask(index)}>Delete</button>
//   </li>
// ))}
// </ul> */}

//Input.js
// import React, { useState } from 'react';

// function Input({ items, setName }) {
//   const [inputValue, setInputValue] = useState("");

//   const handleAddItem = () => {
//     if (inputValue) {
//       setName([...items, inputValue]); 
//       setInputValue("");  
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         className="border border-black mr-2 p-2"
//         placeholder="Enter name"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
    
//       <button className="border border-black p-2" onClick={handleAddItem}>
//         Add item
//       </button>
      
//     </div>
//   );
// }

// export default Input;
