import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AddCity = () => {
  const navigate = useNavigate();
  const initState = {
    Country: "",
    City: "",
    Population: "",
  };
  const [data, setData] = useState(initState);

  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get("https://cryptic-ravine-10338.herokuapp.com/countries")
      .then(({ data }) => {
        setCountry(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addcity();
  };

  const addcity = async () => {

    // axios.post("http://localhost:8080/cities",{
      
    // });

      await fetch("https://cryptic-ravine-10338.herokuapp.com/cities", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
      setData({
        Country: "",
        City: "",
        Population: null,
      });
   
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div>
        <h1>Add City</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="City"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <br />
          <select name="Country" id="" onChange={handleChange}>
            {country.map((e) => {
              return (
                <option key={e.id} value={e.country}>
                  {e.country}
                </option>
              );
            })}
          </select>
          <br />
          <input
            onChange={handleChange}
            type="number"
            placeholder="population"
            name="Population"
          />
          <br />
          <input type="submit" value="ADD CITY" />
        </form>
      </div>
    </div>
  );
};
