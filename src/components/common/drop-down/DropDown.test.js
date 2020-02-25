import React from 'react';
import { render } from '@testing-library/react';
import DropDown from './DropDown';

describe('Drop Down test cases', () => {
  const defaultProps = {
    placeholder: 'placeholder',
    options: [],
    className: 'drop-down',
    onChange: jest.fn()
  }
  test('renders drop-down correctly', () => {
    const { asFragment } = render(<DropDown {...defaultProps}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
