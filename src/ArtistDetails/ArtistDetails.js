import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistContext from '../ArtistContext';

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { artists } = this.context;
    console.log(artists);
    // const { id } = this.props.match.params;
  }

  update() {
    const { artist } = this.props;
    const { updateArtist } = this.context;
    updateArtist(artist);
  }

  render() {
    return (
      <div>
        Here!
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
