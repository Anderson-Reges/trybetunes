import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import '../Search.css';

class Search extends React.Component {
  state = {
    inputSearch: '',
    prevInputSearch: [],
    disabled: true,
    loading: false,
    hasRender: false,
    search: '',
    requestUrl: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { inputSearch } = this.state;
        const LENGTH = 2;
        if (inputSearch.length >= LENGTH) {
          this.setState({
            disabled: false,
          });
        } else {
          this.setState({
            disabled: true,
          });
        }
      },
    );
  };

  handleSearch = async () => {
    const { inputSearch } = this.state;
    this.setState((prev) => ({
      loading: true,
      prevInputSearch: [...prev.inputSearch],
      search: inputSearch }));
    const requestUrl = await searchAlbumsAPI(inputSearch);
    this.setState({
      loading: false,
      requestUrl,
      inputSearch: '',
      disabled: true,
      hasRender: true,
    });
  };

  albumCard = (requestUrl) => {
    // console.log(requestUrl);
    const { prevInputSearch } = this.state;
    if (requestUrl.length === 0) {
      return <p>Nenhum álbum foi encontrado</p>;
    }
    if (requestUrl) {
      return (
        <div>
          <h4>
            Resultado de álbuns de:
            {' '}
            { prevInputSearch }
          </h4>
          ;
          {requestUrl.map((element) => (
            <Link
              data-testid={ `link-to-album-${element.collectionId}` }
              to={ `./album/${element.collectionId}` }
              key={ element.collectionId }
            >
              <img
                alt={ element.collectionName }
                src={ element.artworkUrl100 }
              />
              <h4>{element.collectionName}</h4>
              <p>{element.artistName}</p>
            </Link>))}
        </div>);
    }
  };

  render() {
    const { disabled, inputSearch, loading, hasRender, requestUrl } = this.state;
    console.log(inputSearch);
    const albums = (
      <div className="albums">
        {this.albumCard(requestUrl)}
      </div>);

    return (loading ? <Loading /> : (
      <div data-testid="page-search">
        <Header />
        <h3>Search</h3>
        <input
          type="text"
          name="inputSearch"
          value={ inputSearch }
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => this.handleSearch(inputSearch) }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
        {hasRender && albums}
      </div>
    )
    );
  }
}

export default Search;
