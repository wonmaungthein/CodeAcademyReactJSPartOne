import React, { Component } from 'react';
import './App.css';
import { FirstCompo } from './Components/FirstCompo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CodeAcademy ReactJS Practice</h1>
        </header>
        <p className="App-intro">
          <FirstCompo />
        </p>
      </div>
    );
  }
}

export default App;
