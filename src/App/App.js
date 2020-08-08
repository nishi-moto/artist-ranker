import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ArtistInput from '../ArtistInput/ArtistInput';
import ArtistContext from '../ArtistContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addArtist: this.addArtist.bind(this),
      artists: [],
    };
  }

  addArtist(artist) {
    const { artists } = this.state;
    this.setState({ artists: [...artists, artist] });
  }

  render() {
    console.log('here', this.state);
    return (
      <ArtistContext.Provider value={this.state}>
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

}

export default App;
