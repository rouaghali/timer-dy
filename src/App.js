import React, { Component } from 'react';

import './App.css';
import  Time  from './Time';
class App extends Component {
  render() {
    return (
      <div>
        <Time ms={20010000} />
        
      </div>
    );
  }
}

export default App;
