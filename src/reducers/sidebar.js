import { SET_FLIGHTS_DATA, SET_FLIGHTS_FILTERS } from "../actions/sidebar";

const defaultSchema = {
  flights: [],
  filters: {}
}

export default (state = defaultSchema, action) => {
  switch (action.type) {
    case SET_FLIGHTS_DATA:
      return {...state, flights: action.payload};
    case SET_FLIGHTS_FILTERS:
      return {...state, filters: action.payload};
    default:
      return state;
  }
};