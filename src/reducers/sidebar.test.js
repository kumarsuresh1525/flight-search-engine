import sideBarReducer from './sidebar';
import {
  SET_FLIGHTS_DATA, SET_FLIGHTS_FILTERS
} from '../actions/sidebar';

const flights = [
  { id: 1,
    flightNo: "EM-P-D-201",
    source: "PNQ",
    source_name: "Pune",
    dest: "DEL",
    dest_name: "Delhi",
    fare: "2500.00",
    date: "2020-02-27",
    time: {depart: "08:00 AM", arrive: "10:30 AM"},
    round_trip_date: "2020-02-29",
    round_trip: {depart: "07:00 AM", arrive: "10:30 PM", number: "EM-D-P-201"},
    imgUrl: 'imgUrl'
  }
]

describe('side-bar reducer', () => {
  test('should return the initial state', () => {
    const initialState = {flights: [], filters: {}}
    expect(sideBarReducer(undefined, {})).toEqual(initialState);
  });

  test('should set flights data', () => {
    const action = {type: SET_FLIGHTS_DATA, payload: flights};
    const expectedState = {filters: {}, flights: flights};

    expect(sideBarReducer(undefined, action)).toEqual(expectedState);
  });

  test('should set flights filters', () => {
    const action = {type: SET_FLIGHTS_FILTERS, payload: {fare: '2500'}};
    const expectedState = {filters: {fare: '2500'}, flights: []};

    expect(sideBarReducer(undefined, action)).toEqual(expectedState);
  });
});
