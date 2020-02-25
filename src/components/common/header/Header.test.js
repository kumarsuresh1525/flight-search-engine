import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders Flight Search Engine header correctly', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
