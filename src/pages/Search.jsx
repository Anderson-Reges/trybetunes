import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    disabled: true,
  };

  handleChange = ({ target }) => {
    const LENGTH = 2;
    const { value } = target;
    if (value.length >= LENGTH) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  render() {
    const { disabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h3>Search</h3>
        <input
          type="text"
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disabled }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
