import {connect} from 'react-redux';

import SideBar from './SideBar';
import {
  getFlights
} from '../../../actions/sidebar';

export const mapStateToProps = (state) => {
  return {
    flights: state.flights.flights,
    filters: state.flights.filters
  };
};

export const mapDispatchToProps = dispatch => ({
  getFlights: (url, body) => {
    dispatch(getFlights(url, body));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
