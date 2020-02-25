import React from 'react';
import Select from 'react-select';
import './Dropdown.scss';

const DropDown = ({placeholder, options, className, onChange}) => {
  return (
    <Select
      className={className}
      defaultValue={[]}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default DropDown;