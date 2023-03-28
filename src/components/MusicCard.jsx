import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends React.Component {
  state = {
    loading: false,
    checked: false,
  };

  componentDidMount() {
    this.validationCheckMusic();
  }

  handleChange = async () => {
    const { album, setNewState } = this.props;
    const { checked } = this.state;
    this.setState({ loading: true });
    await addSong(album);
    this.setState({ loading: false, checked: true });
    if (checked === true) {
      this.setState({ loading: true });
      await removeSong(album);
      if (setNewState) await setNewState();
      this.setState({ loading: false, checked: false });
    }
  };

  validationCheckMusic() {
    const { favoritedList, album } = this.props;
    const validation = favoritedList.some(({ trackId }) => trackId === album.trackId);
    this.setState({ checked: validation });
  }

  render() {
    const {
      trackId, trackName,
      previewUrl,
    } = this.props;
    const {
      loading, checked,
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

          <label htmlFor="Favorita">
            Favorita
            <input
              type="checkbox"
              id="Favorita"
              onChange={ this.handleChange }
              data-testid={ `checkbox-music-${trackId}` }
              checked={ checked }
            />
          </label>
          {loading && <Loading />}
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
