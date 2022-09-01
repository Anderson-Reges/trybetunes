import React from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends React.Component {
  render() {
    const { track } = this.props;
    return (
      <div>
        {track.map((element) => (
          <div key={ element.artistId }>
            <h4>{element.trackName}</h4>
            <audio data-testid="audio-component" src={ element.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              {' '}
              <code>audio</code>
              .
            </audio>
          </div>
        ))}
      </div>
    );
  }
}
MusicCard.propTypes = {
  track: PropTypes.instanceOf(Array).isRequired,
};
