import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistContext from '../ArtistContext';

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.getArtist = this.getArtist.bind(this);
  }

  getArtist() {
    const { match } = this.props;
    const { getArtistbyID } = this.context;
    return getArtistbyID(match.params.id);
  }

  update() {
    const { artist } = this.props;
    const { updateArtist } = this.context;
    updateArtist(artist);
  }

  render() {
    const artist = this.getArtist();
    console.log(artist);
    if(typeof artist === 'undefined') {
      return(
        <div>
          Ops, something wrong happened!
        </div>
      );
    }
    return (
      <div>
        <div>
          <h3>Artist Page</h3>
          Name:
          {artist.name}
          Stars:
          {artist.stars}
          PictURL:
          {artist.pictureURL}
        </div>
        <button id="back" type="button">Back</button>
        <button id="save" type="button">Save</button>

      </div>
    );
  }
}

ArtistDetails.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stars: PropTypes.number,
    pictureURL: PropTypes.string,
  }),
};

ArtistDetails.defaultProps = {
  artist: {},
};

ArtistDetails.contextType = ArtistContext;

export default ArtistDetails;
