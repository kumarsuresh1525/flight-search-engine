import AjaxWrapper from '../api/AjaxWrapper';

export const SET_FLIGHTS_DATA = 'SET_FLIGHTS_DATA';
export const SET_FLIGHTS_FILTERS = 'SET_FLIGHTS_FILTERS';

export const setFlights = (flighs) => {
  return {
    type: SET_FLIGHTS_DATA,
    payload: flighs
  }
}

const setFilters = (filters) => {
  return {
    type: SET_FLIGHTS_FILTERS,
    payload: filters
  }
}

const getFlights = (url, body) => {
  return (dispatch) => {
    dispatch(setFlights([]));
    dispatch(setFilters(body));
    AjaxWrapper.get(url).then((response) => {
      const result = body.returnDate ? response.filter(flight => (parseInt(flight.fare) <= parseInt(body.fare) && flight.source === body.src &&
        flight.dest === body.dest && flight.date >= body.startDate && flight.round_trip_date <= body.returnDate)
          ) : response.filter(flight => (parseInt(flight.fare) <= parseInt(body.fare) && flight.source === body.src &&
            flight.dest === body.dest && flight.round_trip_date >= body.startDate)
        )
      dispatch(setFlights(result));
    });
  };
};

export {getFlights, setFilters}