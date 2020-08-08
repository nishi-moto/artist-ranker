import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import logo from './logo.svg';
import './App.css';
import ArtistInput from '../ArtistInput/ArtistInput';
import ArtistContext from '../ArtistContext';
import ArtistsList from '../ArtistsList/ArtistList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addArtist: this.addArtist.bind(this),
      updateArtist: this.updateArtist.bind(this),
      artists: [],
    };
  }

  addArtist(artist) {
    const { artists } = this.state;
    const newArtist = {
      id: uuidv4(),
      name: artist.name,
      stars: 0,
      pictureURL: '',
    };
    const newArtistList = [...artists, newArtist];
    // localStorage.setItem('artists', JSON.stringify(newArtistList));
    // console.log(localStorage);
    this.setState({ artists: newArtistList });
  }

  updateArtist(artist) {
    const { artists } = this.state;
    const updatedArtists = artists.map(person => {
      if (person.id === artist.id) {
        return {
          id: artist.id,
          name: artist.name,
          stars: artist.stars,
          pictureURL: artist.picture,
        };
      }
      return person;
    });
    // localStorage.setItem('artists', JSON.stringify(newArtistList));
    // // console.log(localStorage);
    this.setState({ artists: updatedArtists });
  }

  render() {
    // console.log('here', this.state);
    return (
      <ArtistContext.Provider value={this.state}>
        <div className="App">
          <header className="Header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1> Artist Ranker </h1>
          </header>
          <section>
            <ArtistInput />
            <ArtistsList />
          </section>
        </div>
      </ArtistContext.Provider>
    );
  }
}

export default App;
