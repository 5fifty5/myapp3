import React from 'react';
import logo from './logo.svg';
import './App.css';
import HouseMusic from './components/HouseMusic';
import AfroBeats from './components/AfroBeats';
import HouseArtists from './components/HouseArtists';
import AfroBeatsArtists from './components/AfroBeatsArtists';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HouseMusic />
      <HouseArtists />
      <AfroBeats />
      <AfroBeatsArtists />      
    </div>
  );
}

export default App;
