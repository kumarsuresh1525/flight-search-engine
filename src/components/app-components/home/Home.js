import React, {memo} from 'react';
import './Home.scss';

const Home = ({flights = [], filters}) => {
  const journey = `${filters.src} > ${filters.dest} ${filters.returnDate ? ` > ${filters.src}` : ''}`
  return (
    <div className='main-content'>
      <div className='result-container'>
        {
          !flights.length && filters.src && <div className='default-message'>
            <p>Sorry no result Found!</p>
            <p>Please refine your search</p>
          </div>
        }
        {!flights.length && !filters.src  && <div className='default-message'>
          <p>Welcome!</p>
          <p>Please use search side bar for the customized search.</p>
          <p>Under Round Trip tab you can search for Round Trips.</p>
          <p>Please use Filter by Price range slider to refine your search.</p>
          <p>As I've created a directive to disable previous dates,</p>
          <p>So for Convenience please use below dates to test this application:</p>
          <hr />
          <div>
            <p>Data is mostly created for flights 27 Feb 2010 and Return Date: 29 Feb 2020</p>
          </div>
        </div>}
      </div>
      {flights.length > 0 &&
        <div className='flights'>
          <div className='journey'>
            <span>{journey}</span>
            <div>
              <div>Start Date: {filters.startDate}</div>
              {filters.returnDate && <div>Return Date: {filters.returnDate}</div>}
            </div>
          </div>
          {flights.map((flight) => {
            return (
              <div className='flight' key={flight.id}>
                <div className='details'>
                  <div className='flight-price'>Rs. {flight.fare}</div>
                  <div className='more-info'>
                    <div>
                      <div>{flight.flightNo}</div>
                      <div>{flight.source} > {flight.dest}</div>
                      <div>Depart: {flight.time.depart}</div>
                      <div>Arrive: {flight.time.arrive}</div>
                    </div>
                    {
                      filters.returnDate && <div>
                        <div>{flight.round_trip.number}</div>
                        <div>{flight.dest} > {flight.source}</div>
                        <div>Depart: {flight.round_trip.depart}</div>
                        <div>Arrive: {flight.round_trip.arrive}</div>
                      </div>
                    }
                  </div>
                </div>
                <div className='book'>
                  <img src={flight.imgUrl} alt='flight icon'/>
                  <button className='btn btn-primary'>Book</button>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default memo(Home);