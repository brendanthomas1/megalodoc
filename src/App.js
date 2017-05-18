import React, { Component } from 'react';
import logo from './logo.svg';
// NOTE: Using extrnal Bootstrap v4 alpha stylesheet
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img src={logo} alt="logo" />
            <h2>Welcome to React</h2>
            <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          </div>
          <div className="col">
            Main content here
          </div>
        </div>
      </div>
    );
  }
}

export default App;
