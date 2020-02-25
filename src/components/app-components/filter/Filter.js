import React, {useState} from 'react';
import Input from '../../common/input/Input';
import './Filter.scss';

const FilterByPrice = (props) => {
  const [price, setPrice] = useState(12000);
  const handlePriceChange = (value) => {
    setPrice(value);
    props.setFilters({fare: value});
    const filters = {...props.filters, fare: value};
    props.filters.src && props.getFlights('flights', filters)
  }
  return (
    <div className='price'>
      <div className='price-label'>Filter By Price</div>
      <div className='price-range'>
        <span className='price-range--min'>1000</span>
        <span className='price-range--max'>12000</span>
      </div>
      <Input
        className='input-range'
        type='range'
        defaultValue={12000}
        min={1000}
        max={12000}
        onChange={handlePriceChange}
      />
      <div className='price-selected'>Price : {price}</div>
    </div>
  );
}

export default FilterByPrice;