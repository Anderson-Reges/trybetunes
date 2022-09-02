import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends React.Component {
  state = {
    checked: false,
  };

  handleClick = async () => {
    const { album } = this.props;
    this.setState({
      checked: true,
    });
    await addSong(album);
    this.setState({
      checked: false,
    });
  };

  render() {
    const {
      trackId, trackName,
      previewUrl,
    } = this.props;
    const {
      checked,
    } = this.state;
    return (
      <div>
        <div>
          <h4>{trackName}</h4>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
            .
          </audio>
          {checked && <Loading />}
          <label htmlFor="Favorita">
            Favorita
            <input
              type="checkbox"
              id="Favorita"
              onClick={ this.handleClick }
              data-testid={ `checkbox-music-${trackId}` }
            />
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  handleChange: PropTypes.any,
  handleClick: PropTypes.any,
  previewUrl: PropTypes.any,
  trackId: PropTypes.any,
  trackName: PropTypes.any,
}.isRequired;
