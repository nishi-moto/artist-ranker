import React, { Component } from 'react';
import ArtistContext from '../ArtistContext';
import Artist from '../Artist/Artist';

class ArtistsList extends Component {
  constructor(props) {
    super(props);
    this.sortArtists = this.sortArtists.bind(this);
  }

  sortArtists() {
    const { artists } = this.context;
    // sort artists by stars
    console.log('list', artists);
    return artists;
  }

  render() {
    const artistList = this.sortArtists();
    if (!artistList || !artistList.length) {
      return (
        <div className="Artist'">
          Ops, there is no Artist here yet. Please, add an artist above!
        </div>
      );
    }
    console.log(artistList);
    return (
      artistList.map(artist => <Artist key={artist.name} artist={artist} />)
    );
  }
}

ArtistsList.contextType = ArtistContext;

export default ArtistsList;
