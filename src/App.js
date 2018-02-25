import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './scenes/Landing';
import Home from './scenes/Home';
import Experience from './scenes/Experiences/';
import reducer from './store';

import './styles/normalize.css';
import './styles/base.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/experience" component={Experience} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
