import React from "react";

export const AllSorting = ({ SortByPopulatio, SortByCountry }) => {
  return (
    <div style={{ margin: "center" }}>
      <div>
        <hr />
        <button
          onClick={() => {
            SortByCountry();
          }}
        >
          Sort By country
        </button>

        <button
          onClick={() => {
            SortByPopulatio();
          }}
        >
          SortByPopulation
        </button>
      </div>
    </div>
  );
};
