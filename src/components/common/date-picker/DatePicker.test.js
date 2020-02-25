import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('Date-Picker test cases', () => {
  const defaultProps = {
    onChange: jest.fn()
  }
  test('renders date-picker correctly', () => {
    const { asFragment } = render(<DatePicker {...defaultProps}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should handle date change', () => {
    const { container } = render(<DatePicker {...defaultProps}/>);
    const datePicker = container.querySelector('.date-picker');
    fireEvent.change(datePicker, {target: {value: '2020-02-24'}});
    expect(datePicker.value).toBe('2020-02-24');
  });
});