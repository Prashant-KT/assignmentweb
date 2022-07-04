import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddCity } from "../AddCity/AddCity";
import { AddCountry } from "../AddCountry/AddCountry";
import { Home } from "../Home/Home";
import { Changecity } from "../Changecity/Changecity";
import { AllCountry } from "../AddCountry/AllCountry";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<AllCountry />} />
      <Route path="/add-country" element={<AddCountry />} />
      <Route path="/editCity/:id" element={<Changecity />} />
      <Route path="/add-city" element={<AddCity />} />
    </Routes>
  );
};
