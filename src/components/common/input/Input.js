import React, {useState, memo} from 'react';
import './Input.scss';

const Input = ({type, onChange, className, placeholder, isMandatory, min = 1, max = 100, defaultValue}) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState('');
  const handleChange = (event) => {
    const {value: inputValue} = event.target;
    setValue(inputValue);
    onChange(inputValue);
  }

  const handleBlur = () => {value.length < 1 && setError('No of passengers is mandatory')}
  return (
    <div>
      <input
        data-testid='input'
        type={type}
        className={className}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
      />
      {isMandatory && <div className='error'>{error}</div>}
    </div>
  );
}

export default memo(Input);