import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistContext from '../ArtistContext';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.updateArtist = this.updateArtist.bind(this);
  }

  updateArtist() {
    // implement
    const { artist } = this.props;
    return artist;
  }

  render() {
    // const artist = this.updateArtist();
    const { artist } = this.props;

    return (
      <div>
        {artist.pictureURL}
        {artist.name}
        {artist.stars}
      </div>
    );
  }
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    stars: PropTypes.number,
    pictureURL: PropTypes.string,
  }),
};

Artist.defaultProps = {
  artist: {},
};

Artist.contextType = ArtistContext;
export default Artist;
