import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ArtistInput from '../ArtistInput/ArtistInput';
import ArtistContext from '../ArtistContext';

function App() {
  return (
    <ArtistContext.Provider value="orange">
      <div className="App">
        <header className="Header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1> Artist Ranker </h1>
        </header>
        <section>
          <ArtistInput />
        </section>
      </div>
    </ArtistContext.Provider>
  );
}

export default App;
