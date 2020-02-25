import React, {useState, useEffect} from 'react';
import './Sidebar.scss';
import DropDown from '../../common/drop-down/DropDown';
import Input from '../../common/input/Input';
import AjaxWrapper from '../../../api/AjaxWrapper';
import DatePicker from '../../common/date-picker/DatePicker';
import FilterContainer from '../filter/FilterContainer';

const SideBar = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const [cities, setCities] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [passenger, setPassenger] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  let oneWay = 'active';
  let roundTrip = '';
  if (!activeTab) {
    oneWay = '';
    roundTrip = 'active';
  }
  const handleFrom = (src) => setSource(src);
  const handleTo = (dest) => setDestination(dest);

  useEffect(() => {
    AjaxWrapper.get('cities').then((resp) => {
      const getCities = resp.cities.map((city) => {
        return {value: city.code, label: city.code};
      });
      setCities(getCities);
    });
  }, []);

  const handlePassengerChange = (no) => setPassenger(no);
  const handleStartDate = (date) => {
    setStartDate(date);
  }

  const handleReturnDate = (date) => {
    setReturnDate(date);
  }

  const handleTripSelection = (selected) => {
    setActiveTab(selected);
    selected && setReturnDate('');
  }

  const handleSearch = () => {
    const flight = {
      src: source.value,
      dest: destination.value,
      startDate,
      returnDate,
      fare: props.filters.fare || 12000,
      passenger
    }
    props.getFlights('flights', flight);
  }
  const isDisabledSearch = !source.value || !destination.value || !startDate || !passenger;
  return (
    <div className='side-bar'>
      <div className='tabs-container'>
        <nav className='tabs-btn'>
          <button onClick={() => {handleTripSelection(true)}} className={`btn ${oneWay}`}>One Way</button>
          <button onClick={() => {handleTripSelection(false)}} className={`btn ${roundTrip}`}>Round Trip</button>
        </nav>
        <div className='tabs-wrapper'>
          <div className='tab'>
            <DropDown
              className='drop-down'
              placeholder='Enter origin City'
              options={cities}
              onChange={handleFrom}
            />
            <DropDown
              className='drop-down'
              placeholder='Enter Destination City'
              options={cities}
              onChange={handleTo}
            />
            <DatePicker onChange={handleStartDate}/>
            {!activeTab && <DatePicker onChange={handleReturnDate}/>}
            <Input
              className='input-number'
              type='number'
              placeholder='No of passengers'
              defaultValue={''}
              min={0}
              errorMsg='No of passengers is mandatory'
              onChange={handlePassengerChange}
              isMandatory
            />
            <button disabled={isDisabledSearch} className='btn btn-primary' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      <div>
        <FilterContainer />
      </div>
    </div>
  );
}

export default SideBar;