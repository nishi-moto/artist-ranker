import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistContext from '../ArtistContext';

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.state = {
      inputName: '',
      inputImage: '',
      messageName: '',
      messageImage: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputNameChange = this.onInputNameChange.bind(this);
    this.onInputNameChange = this.onInputNameChange.bind(this);
    this.validateInputName = this.validateInputName.bind(this);
    this.validateInputImage = this.validateInputImage.bind(this);
  }

  onInputNameChange(event) {
    this.setState({ inputName: event.target.value });
  }

  onInputImageChange(event) {
    this.setState({ inputImage: event.target.value });
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

  validateInputName() {
    const { inputName } = this.state;
    if (inputName === '') {
      this.setState({ messageName: 'Please provide a name.' });
      return false;
    }
    this.setState({ messageName: '' });
    return true;
  }

  validateInputImage() {
    // const { inputImage } = this.state;
    // if (input === '') {
    //   this.setState({ message: 'Please provide a name.' });
    //   return false;
    // }
    // this.setState({ message: '' });
    // return true;
  }

  handleSubmit() {
    if (!this.validateInputName()) {
      return;
    }
    const artist = this.getArtist();
    const { inputName } = this.state;
    artist.name = inputName;
    this.update();
  }

  render() {
    const artist = this.getArtist();
    const { messageName } = this.state;
    const { inputName } = this.state;

    if (typeof artist === 'undefined') {
      return (
        <div>
          Ops, something wrong happened!
        </div>
      );
    }
    return (
      <div>
        <div>
          <h3>Artist Page</h3>
          <p>
            Name:
            <input
              name="nameInput"
              type="text"
              value={inputName}
              onChange={this.onInputNameChange}
              placeholder={artist.name} />
          </p>
          <div name="MessageName">
            {messageName}
          </div>
          <p>
            PictURL:
            <input
              name="nameInput"
              type="text"
              // value=""
              onChange={this.onInputImageChange}
              placeholder={artist.pictureURL} />
          </p>

        </div>
        <button id="back" type="button">Back</button>
        <button id="save" type="button" onClick={this.handleSubmit}>Save</button>

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
