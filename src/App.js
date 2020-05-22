import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

// Add router & wrap whole code using BrowserRouter tag
class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div >

          <Main />

        </div></BrowserRouter>
    );
  }
}

export default App;
