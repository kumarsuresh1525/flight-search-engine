import {connect} from 'react-redux';
import {
  setFilters,
  getFlights
} from '../../../actions/sidebar';
import FilterByPrice from './Filter';

export const mapStateToProps = (state) => {
  return {
    flights: state.flights.flights,
    filters: state.flights.filters
  };
};

export const mapDispatchToProps = dispatch => ({
  getFlights: (url, fare) => {
    dispatch(getFlights(url, fare));
  },
  setFilters: (filters) => {
    dispatch(setFilters(filters));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByPrice);
