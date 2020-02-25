import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockUtil from '../utils/mockUtils';
import {
  getFlights,
  setFlights,
  SET_FLIGHTS_FILTERS,
  SET_FLIGHTS_DATA
} from './sidebar';

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

describe('Side bar Action', () => {
  const mockStore = configureMockStore([thunk]);
  let testStore;

  beforeEach(() => {
    testStore = mockStore({});
  });

  it('get flights', () => {
    const filter = {
      fare: "2500.00",
      src: "PNQ",
      dest: "DEL",
      startDate: "2020-02-27"
    }
    mockUtil.mockGet(flights);
    const expected = [
      {
        payload: [],
        type: SET_FLIGHTS_DATA
      },
      {
        payload: {
          dest: "DEL",
          fare: "2500.00",
          src: "PNQ",
          startDate: "2020-02-27"
        },
        type: SET_FLIGHTS_FILTERS
      },
      {
        payload: flights,
        type: SET_FLIGHTS_DATA
      }
    ]
    testStore.dispatch(getFlights('flights', filter));
    expect(testStore.getActions()).toEqual(expected);
  });

  it('get flights with return date no result found', () => {
    const filter = {
      fare: "2500.00",
      src: "PNQ",
      dest: "DEL",
      startDate: "2020-02-27",
      returnDate: "2020-02-27"
    }
    mockUtil.mockGet(flights);
    const expected = [
      {
        payload: [],
        type: SET_FLIGHTS_DATA
      },
      {
        payload: {
          dest: "DEL",
          fare: "2500.00",
          src: "PNQ",
          startDate: "2020-02-27",
          returnDate: "2020-02-27"
        },
        type: SET_FLIGHTS_FILTERS
      },
      {
        payload: [],
        type: SET_FLIGHTS_DATA
      }
    ]
    testStore.dispatch(getFlights('flights', filter));
    expect(testStore.getActions()).toEqual(expected);
  });

  it('get flights with round trip', () => {
    const filter = {
      fare: "2500.00",
      src: "PNQ",
      dest: "DEL",
      startDate: "2020-02-27",
      returnDate: "2020-02-29"
    }
    mockUtil.mockGet(flights);
    const expected = [
      {
        payload: [],
        type: SET_FLIGHTS_DATA
      },
      {
        payload: {
          dest: "DEL",
          fare: "2500.00",
          src: "PNQ",
          startDate: "2020-02-27",
          returnDate: "2020-02-29"
        },
        type: SET_FLIGHTS_FILTERS
      },
      {
        payload: flights,
        type: SET_FLIGHTS_DATA
      }
    ]
    testStore.dispatch(getFlights('flights', filter));
    expect(testStore.getActions()).toEqual(expected);
  });

  it('set flights data', () => {
    testStore.dispatch(setFlights(flights));
    const expected = [{type: SET_FLIGHTS_DATA, payload: flights}];
    expect(testStore.getActions()).toEqual(expected);
  });
});
