import React from 'react';
import PropTypes from 'prop-types';
import '../Style.css';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  state = {
    album: [],
    tracks: [],
    favoritedList: [],
    loading: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      loading: true,
    });
    const favoritedList = await getFavoriteSongs();
    const musicsList = await getMusics(id);
    const album = musicsList.filter((_, index) => index === 0);
    const tracks = musicsList.filter((_, index) => index !== 0);
    this.setState({
      album,
      tracks,
      favoritedList,
      loading: false,
    });
  }

  render() {
    const { album, tracks, favoritedList, loading } = this.state;
    console.log(favoritedList);
    return (
      <span>
        <Header />
        <h1>Album:</h1>
        <div data-testid="page-album" className="album-musics">
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
          <div className="musics">
            {loading && <Loading />}
            {tracks.map((element) => {
              const check = favoritedList.some((s) => s.trackId === element.trackId);
              return (
                <MusicCard
                  key={ element.trackId }
                  trackName={ element.trackName }
                  previewUrl={ element.previewUrl }
                  trackId={ element.trackId }
                  object={ element }
                  check={ check }
                />
              );
            })}
          </div>
        </div>
      </span>
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
