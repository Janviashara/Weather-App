import React, { useEffect, useState } from 'react'
import Form from './Form'

function LocalStorage() {

    const storedItems = JSON.parse(localStorage.getItem("city")) || []; //initialize with empty array
    const [city , setCity]  = useState(storedItems);

    useEffect(()=>{
        console.log("Add city :",city)
        localStorage.setItem("city",JSON.stringify(city));
    },[city])

  return (
    <div>
        <Form items={city} setCity={setCity}/>
    </div>
  )
}

export default LocalStorage