import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './components/home/NavBar';

class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
          {/*quite el padding alv style={{paddingTop:64}}*/}
       <div>
           <Routes/>
       </div>
        
      </div>
    );
  }
}

export default App;
