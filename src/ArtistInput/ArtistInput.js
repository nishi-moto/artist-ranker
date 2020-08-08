import React, { Component } from 'react';
import ArtistContext from '../ArtistContext';

class ArtistInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  validateInput() {
    const { input } = this.state;
    if (input === '') {
      this.setState({ message: 'Please provide a name.' });
      return false;
    }
    this.setState({ message: '' });
    return true;
  }

  handleSubmit() {
    if (!this.validateInput()) {
      return;
    }
    const { input } = this.state;
    const { addArtist } = this.context;
    addArtist({ name: input });
    this.setState({ input: '' });
  }

  render() {
    const { message } = this.state;
    const { input } = this.state;
    return (
      <div className="ArtistAdder">
        <p>Artist&apos;s name:</p>
        <input
          name="addArtistInput"
          type="text"
          value={input}
          onChange={this.onInputChange}
          placeholder={"Artist's name ... "} />
        <button className="submit" onClick={this.handleSubmit} type="button">Submit</button>
        <div name="Message">
          { message }
        </div>
        {/* <List search={this.state.value} /> */}
      </div>
    );
  }
}

ArtistInput.contextType = ArtistContext;

export default ArtistInput;
