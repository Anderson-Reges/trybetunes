import React from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MusicCard from '../../components/MusicCard';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import styles from './styles.module.scss';

class Favorites extends React.Component {
  state = {
    loading: false,
    musics: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const musics = await getFavoriteSongs();
    this.setState({
      loading: false,
      musics,
    });
    // console.log('didmount');
  }

  setNewState = async () => {
    const musics = await getFavoriteSongs();
    this.setState({
      musics,
    });
  };

  handleChange = async () => {
    const { musics } = this.state;
    this.setState({ loading: true });
    const favoritedMusics = await getFavoriteSongs();
    if (favoritedMusics !== musics) {
      this.setState({ loading: false, musics });
    }
  };

  render() {
    const { musics, loading } = this.state;
    // console.log('render');
    return (
      <div className={ styles.inputSearchMusics }>
        <Header />
        <p>Favorites</p>
        {loading ? <Loading /> : (
          musics.map((element) => (
            <MusicCard
              key={ element.trackId }
              trackName={ element.trackName }
              previewUrl={ element.previewUrl }
              trackId={ element.trackId }
              album={ element }
              favoritedList={ musics }
              handleChange={ this.handleChange }
              setNewState={ this.setNewState }
            />))
        )}
      </div>
    );
  }
}

export default Favorites;
