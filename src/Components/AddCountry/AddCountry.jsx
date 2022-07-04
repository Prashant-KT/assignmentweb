import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
export const AddCountry = () => {

  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const handleCountry = () => {
    axios
      .post("https://cryptic-ravine-10338.herokuapp.com/countries", {
        country,
      })
      .then((res) => {
        navigate("/");
      });
  };
  return (
    <div>
       <input type="text" onChange={(e)=>{setCountry(e.target.value)}}/>
       <button onClick={handleCountry}>Add Country</button>
    </div>
  );
};

