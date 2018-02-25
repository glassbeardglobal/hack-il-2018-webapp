import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './scenes/Landing';
import Home from './scenes/Home';
import Experience from './scenes/Experiences/';
import reducer from './store';

import './styles/normalize.css';
import './styles/base.css';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/experience/:id" component={Experience} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
