import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

class Favorites extends React.Component {
  state = {
    loading: false,
    musics: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const musics = await getFavoriteSongs();
    console.log(musics);
    this.setState({
      loading: false,
      musics,
    });
  }

  render() {
    const { musics, loading } = this.state;
    return (
      <div data-testid="page-favorites" className="input-search-tags-page">
        <Header />
        <p>Favorites</p>
        {loading && <Loading />}
      </div>
    );
  }
}

export default Favorites;
