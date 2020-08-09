import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArtistContext from '../ArtistContext';
import './Artist.css';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  update() {
    const { artist } = this.props;
    const { updateArtist } = this.context;
    updateArtist(artist);
  }

  increment() {
    const { artist } = this.props;
    artist.stars += 1;
    this.update();
  }

  decrement() {
    const { artist } = this.props;
    if (artist.stars > 0) {
      artist.stars -= 1;
      this.update();
    }
  }

  render() {
    const { artist } = this.props;
    let img = <img alt={artist.name} src="./default.jpg" className="artistImage" />;
    if (artist.pictureURL !== '') {
      img = <img alt={artist.name} src={artist.pictureURL} className="artistImage" />;
    }
    return (
      <div>
        {img}
        <Link to={`/artist/${artist.id}`}>
          {artist.name}
        </Link>
        &nbsp;
        {artist.stars}
        &nbsp;stars
        <button type="button" id="increment" onClick={this.increment}> + </button>
        <button type="button" id="decrement" onClick={this.decrement}> - </button>
      </div>
    );
  }
}

Artist.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
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
