import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import SideBar from './SideBar';
import mockUtil from '../../../utils/mockUtils';

const mockStore = configureMockStore();
const store = mockStore({flights: []});

const cities = {
  "cities": [{

      "code": "BOM",
      "name": "Mumbai"
    },
    {

      "code": "DEL",
      "name": "Delhi"
    },
    {

      "code": "HYD",
      "name": "Hyderabad"

    },
    {
      "code": "PNQ",
      "name": "Pune"
    }

  ]
};

describe('side-bar testing', () => {
  const defaultProps = {
    filters: {
      fare: 2500
    },
    getFlights: jest.fn()
  }

  const getComponent = (props) => {
    return render(
      <Provider store={store}>
        <SideBar {...props}/>
      </Provider>
    );
  }
  let wrapper;
  beforeEach(() => {
    wrapper = getComponent(defaultProps);
  });

  test('renders Side-Bar correctly', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should be able to select trip', () => {
    const {getByText, container} = wrapper;
    let tripText = getByText(/Round Trip/);
    fireEvent.click(tripText);
    expect(container.querySelector('.active').textContent).toBe('Round Trip');
    tripText = getByText(/One Way/);
    fireEvent.click(tripText);
    expect(container.querySelector('.active').textContent).toBe('One Way');
  });
});