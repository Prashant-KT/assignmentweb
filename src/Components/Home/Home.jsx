import React, { useState, useEffect } from "react";
import { AllSorting } from "../AllSorting/AllSorting";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../../Redux/Country/action";
import Loader from "../Loader/Loader";
import { InRow } from "../InRow/InRow";
import { Link } from "react-router-dom";


export const Home = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  useEffect(() => {
    getData();
  }, [dispatch]);

  const getData = () => {
    setLoading(true);

    axios
      .get("https://cryptic-ravine-10338.herokuapp.com/cities")
      .then(({ data }) => {
        dispatch(setCountry(data));
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const cityData = useSelector((store) => store);

  const SortByCountry = () => {
    const sortedData = [...cityData].sort((a, b) => {
      return a.Country > b.Country ? 1 : -1;
    });
    dispatch(setCountry(sortedData));
  };


  const SortByPopulatio = () => {
    const sortedData = [...cityData].sort((a, b) => {
      return a.Population > b.Population ? 1 : -1;
    });
    dispatch(setCountry(sortedData));
  };

  

  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`https://cryptic-ravine-10338.herokuapp.com/cities/${id}`)
      .then(({ data }) => {
        getData();
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  };

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div >
      <Link to={"/add-country"}>
        <button onClick={handleClickOpen}>Add Country</button>
      </Link>

      <Link to={"/countries"}>
        <button onClick={handleClickOpen}>All Countries</button>
      </Link>

      <Link to="/add-city">
        <button>Add City</button>
      </Link>
      <AllSorting
        SortByPopulatio={SortByPopulatio}
        SortByCountry={SortByCountry}
      />
      <div></div>
      <InRow handleDelete={handleDelete} />
    </div>
  );
};
