import React, { useState } from 'react';

function Input({ items, setName }) {
  const click = (id, name, city) => {
    const obj = {
      id: id,
      name: name,
      city: city,
    };
    const [inputValue, setInputValue] = useState("");
    localStorage.setItem('items',JSON.stringify({...obj}));
  }
  
  return (
    <div>
      <input
        type="text"
        className="border border-black mr-2 p-2"
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {items.map((item,index) => {
          console.log(item._id);
          return(
            <li key={items._id}>
              <button onClick={() => click(item._id, item.name, item.city)}>
                Add
              </button>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default Input;
