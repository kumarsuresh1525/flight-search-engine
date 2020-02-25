import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Header from './components/common/header/Header';
import reducers from './reducers/index';
import './App.scss';
import SideBarContainer from './components/app-components/sidebar/SideBarContainer';
import HomeContainer from './components/app-components/home/HomeContainer';

export const history = createBrowserHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(history));

export const store = createStore(reducers, middleware);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <Header />
          <SideBarContainer />
          <Router>
            <Route path='/' component={HomeContainer}/>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
