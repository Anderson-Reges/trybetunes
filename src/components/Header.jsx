import React from 'react';
import { getUser } from '../services/userAPI';

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
    const loadingElement = <h2>Carregando...</h2>;
    const { user, loading } = this.state;
    return (
      loading ? loadingElement
        : (
          <header data-testid="header-component">
            <p data-testid="header-user-name">{ user }</p>
          </header>
        )
    );
  }
}

export default Header;
