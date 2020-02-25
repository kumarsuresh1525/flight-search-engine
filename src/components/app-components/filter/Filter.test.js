import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterByPrice from './Filter';

describe('', () => {
  const deefaultProps = {
    setFilters: jest.fn(),
    getFlights: jest.fn(),
    filters: {src: 'src'}
  }
  test('renders filter by price correctly', () => {
    const { asFragment } = render(<FilterByPrice {...deefaultProps}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should handle Price change', () => {
    const { container, getByText } = render(<FilterByPrice {...deefaultProps}/>);
    const input = container.querySelector('.input-range');
    fireEvent.change(input, {target: {value: 2000}});
    const text = getByText(/Price : 2000/);
    expect(text).toBeInTheDocument();
  });
});

