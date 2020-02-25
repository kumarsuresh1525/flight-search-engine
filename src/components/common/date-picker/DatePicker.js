import React, {useState} from 'react';
import './DatePicker.scss';

const DatePicker = ({onChange}) => {
  const [value, setValue] = useState('');
  const handleDateChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  }
  return (
    <div>
      <input
        className='date-picker'
        type='date'
        value={value}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatePicker;