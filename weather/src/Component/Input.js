import React, { useState } from 'react';

function Input({ items, setName }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue) {
      setName([...items, inputValue]); 
      setInputValue("");  
    }
  };

  // const handleAddItem = () => {
  //   if (inputCity) {
  //     setCity([...items, inputCity]);
  //     setInputCity("");
  //   }
  // };

  return (
    <div>
      <input
        type="text"
        className="border border-black mr-2 p-2"
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    
      <button className="border border-black p-2" onClick={handleAddItem}>
        Add item
      </button>
    </div>
  );
}

export default Input;
