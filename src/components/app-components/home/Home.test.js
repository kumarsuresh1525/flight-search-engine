import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Page test cases', () => {
  const defaultProps = {
    flights: [],
    filters: {
      src: 'src',
      dest: 'dest'
    }
  }

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

  test('renders Home correctly when list is empty', () => {
    const { asFragment } = render(<Home {...defaultProps}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Home correctly with flights details', () => {
    const props = {...defaultProps, flights: flights};
    const { asFragment } = render(<Home {...props}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should be able to no result found', () => {
    const props = {...defaultProps, filters: {returnDate: '2020-02-29', src: 'src', dest: 'dest', startDate: '2020-02-27'}}
    const { getByText } = render(<Home {...props}/>);
    expect(getByText(/Sorry no result Found!/)).toBeInTheDocument();
  });

  it('Should be able to show results for round trip', () => {
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
    const props = {flights, filters: {returnDate: '2020-02-29', src: 'src', dest: 'dest', startDate: '2020-02-27'}}
    const { getByText } = render(<Home {...props}/>);
    expect(getByText(/Start Date: 2020-02-27/)).toBeInTheDocument();
    expect(getByText(/Return Date: 2020-02-29/)).toBeInTheDocument();
  });
});

