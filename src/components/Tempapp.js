import React, { useEffect, useState } from 'react'
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search,setSearch] =useState("Pune");

  useEffect(()=>{
    const fetchApi = async() =>{
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=12920aef06a35b201511b82ed643840b`
      const response = await fetch(url);
      console.log(response)
      const resjson = await response.json();
      console.log(resjson);
      setCity(resjson.main);

    }
    
    
    
    
    
    fetchApi();


  },[search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputfield"
            defaultValue=""
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <i class="fa-solid fa-street-view"></i>
              <h1 className="temp">{city.temp} °C</h1>
              <h3 className="tempmin_max">Min: {city.temp_min} °C | Max : {city.temp_max} °C </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tempapp;