import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    user: '',
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const name = await getUser();
    this.setState({
      user: name.name, loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        <h3
          data-testid="header-user-name"
        >
          { loading ? <Loading /> : <p>{ user }</p>}
        </h3>
        <Link to="/search"><p data-testid="link-to-search">Search</p></Link>
        <Link to="/favorites"><p data-testid="link-to-favorites">Favorites</p></Link>
        <Link to="/profile"><p data-testid="link-to-profile">Profile</p></Link>
      </header>
    );
  }
}

export default Header;
