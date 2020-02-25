import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input test cases', () => {
  const defaultProps = {
    filters: {},
    onChange: jest.fn(),
    className: 'className',
    placeholder: 'placeholder',
    defaultValue: '',
    min: 0,
    max: 100,
    type: 'range',
    isMandatory: true
  }

  test('renders Input correctly', () => {
    const { asFragment } = render(<Input {...defaultProps}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should be able to change the input', () => {
    const {getByTestId} = render(<Input {...defaultProps}/>);
    const input = getByTestId('input');
    fireEvent.change(input, {target: {value: 1}});
    expect(input.value).toBe('1');
  });

  it('Should be able show error on focus out if value is null', () => {
    const props = {...defaultProps, min: ''};
    const {getByTestId, getByText} = render(<Input {...props}/>);
    const input = getByTestId('input');
    fireEvent.blur(input);
    expect(getByText(/No of passengers is mandatory/)).toBeInTheDocument()
  });
});
