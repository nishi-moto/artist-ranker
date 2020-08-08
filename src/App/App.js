import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ArtistInput from '../ArtistInput/ArtistInput';

function App() {
  return (
    <div className="App">
      <header className="Header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> Artist Ranker </h1>
      </header>
      <section>
        <ArtistInput />
      </section>
    </div>
  );
}

export default App;
