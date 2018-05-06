import React, { Component } from 'react';
import Input from './Users/inputField';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header> <br />
        <Input />
      </div>
    );
  }
}

export default App;
