import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    musicsList: [],
    album: [],
    track: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const musicsList = await getMusics(id);
    const album = musicsList.filter((_, index) => index === 0);
    const track = musicsList.filter((_, index) => index !== 0);
    this.setState((prev) => ({
      musicsList: [...prev.musicsList, musicsList],
      album,
      track,
    }));
    console.log(track);
  }

  render() {
    const { album, track } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album:</h1>
        <div>
          {album.map((element) => (
            <div key={ element.id }>
              <img src={ element.artworkUrl100 } alt={ element.artistName } />
              <h1 data-testid="album-name">
                {element.collectionName}
              </h1>
              <h2
                data-testid="artist-name"
              >
                {element.artistName}
              </h2>
            </div>
          ))}
        </div>
        <MusicCard track={ track } />
      </div>
    );
  }
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,

};
export default Album;
