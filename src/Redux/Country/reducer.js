import { GET_COUNTRY } from "./actionTypes";

export const countryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_COUNTRY:
      return payload;
    default:
      return state;
  }
};
