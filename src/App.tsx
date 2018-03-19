import * as React from 'react';
import './App.css';

import { add } from './util'

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload. {add({ x: 12, y: 1 })}
        </p>
      </div>
    );
  }
}

export default App;
