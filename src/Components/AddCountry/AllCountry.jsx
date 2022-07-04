import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

export const AllCountry = () => {
    const [data,setData] = useState([])
    
    useEffect(() => {
      axios
        .get("https://cryptic-ravine-10338.herokuapp.com/countries")
        .then(({ data }) => {
          setData(data);
        });
    }, []);
    console.log(data);
  return (
    <div style={{ margin: "auto", width: "500px", border: "2px solid teal" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>AllCountry</h1>
      {data.map((el) => {
        return (
          <p style={{ display: "flex", justifyContent: "center" }}>
            {el.country}
          </p>
        );
      })}
    </div>
  );
}
