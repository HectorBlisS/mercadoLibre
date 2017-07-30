import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import NavBar from './components/home/NavBar';

class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <div style={{paddingTop:64}}>
           <Routes/>
       </div>
        
      </div>
    );
  }
}

export default App;
