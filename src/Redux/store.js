import { createStore } from "redux";
import { countryReducer } from "./Country/reducer";

export const store = createStore(countryReducer);
