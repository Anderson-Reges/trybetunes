import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import styles from './styles.module.scss';

class Header extends React.Component {
  state = {
    image: '',
  };

  async componentDidMount() {
    const { image } = await getUser();
    this.setState({
      image,
    });
  }

  render() {
    const { image } = this.state;
    return (
      <header className={ styles.header }>
        <Link to="/">
          <h1 id={ styles.logoBox }>DB Music</h1>
        </Link>
        <nav className={ styles.nav }>
          <span id={ styles.navBox }>
            <Link to="/search" id={ styles.navLinkBox }>
              <ion-icon name="search" id={ styles.navIcons } />
              Buscar
            </Link>
            <Link to="/favorites" id={ styles.navLinkBox }>
              <ion-icon name="heart" id={ styles.navIcons } />
              Musicas Curtidas
            </Link>
          </span>
          <Link to="/profile">
            { image !== ''
              ? <img src={ image } alt="ImgUser" id={ styles.profilePicture } />
              : <ion-icon name="person-circle-outline" id={ styles.profileIcon } />}
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default Header;
