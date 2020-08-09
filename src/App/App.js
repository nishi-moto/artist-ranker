import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Router from '../Router/Router';

import ArtistContext from '../ArtistContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addArtist: this.addArtist.bind(this),
      updateArtist: this.updateArtist.bind(this),
      getArtistbyID: this.getArtistbyID.bind(this),
      artists: [],
    };
  }

  componentDidMount() {
    const artists = JSON.parse(localStorage.getItem('artists'));
    if (artists) {
      this.setState({ artists });
    }
  }

  componentDidUpdate() {
    const { artists } = this.state;
    if (artists) {
      localStorage.setItem('artists', JSON.stringify(artists));
    }
  }

  getArtistbyID(id) {
    const { artists } = this.state;
    return artists.filter(artist => artist.id === id)[0];
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
          pictureURL: artist.pictureURL,
        };
      }
      return person;
    });
    this.setState({ artists: updatedArtists });
  }

  render() {
    return (
      <ArtistContext.Provider value={this.state}>
        <div className="App">
          <Router />
        </div>
      </ArtistContext.Provider>
    );
  }
}

export default App;
