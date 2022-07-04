import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const InRow = ({ handleDelete }) => {
  const cityData = useSelector((store) => store);

  return (
    <div style={{ widht: "600px", margin: "auto", border: "10px solid red" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h4>id</h4>
        <h4>Countries</h4>
        <h4>City</h4>
        <h4>Population</h4>
        <h4>edit</h4>
        <h4>Delete</h4>
      </div>

      <div>
        {cityData &&
          cityData.map((e) => {
            return (
              <div
                key={e.id}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <p>{e.id}</p>
                <p>{e.Country}</p>
                <p>{e.City}</p>
                <p>{e.Population}</p>
                <Link to={`/editCity/${e.id}`}>
                  <p>Edit</p>
                </Link>
                <h5 onClick={() => handleDelete(e.id)}>
                  <button>{"Delete"} </button>
                </h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};
