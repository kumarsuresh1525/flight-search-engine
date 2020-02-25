import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
  return {
    flights: state.flights.flights,
    filters: state.flights.filters
  };
};

export default connect(mapStateToProps, null)(Home);
