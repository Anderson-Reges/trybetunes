import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import styles from './styles.module.scss';

export default class HeaderHomePage extends Component {
  state = {
    image: '',
    name: '',
  };

  async componentDidMount() {
    const { image, name } = await getUser();
    this.setState({
      image,
      name,
    });
  }

  render() {
    const { image, name } = this.state;
    return (
      <header className={ styles.header }>
        <Link to="/">
          <h1 id={ styles.logoBox }>DB Music</h1>
        </Link>
        <nav className={ styles.navHome }>
          <span id={ styles.navBoxHome }>
            { name && (
              <Link to="/search" id={ styles.navLinkBox }>
                Buscar Musicas
              </Link>
            )}
            <Link to="/about" id={ styles.navLinkBoxHome }>
              Sobre
            </Link>
          </span>
          {
            name ? (
              <Link to="/search">
                { image !== ''
                  ? <img src={ image } alt="ImgUser" id={ styles.profilePicture } />
                  : <ion-icon name="person-circle-outline" id={ styles.profileIcon } />}
              </Link>
            ) : (
              <Link to="/login" id={ styles.navLinkBoxHome }>
                <ion-icon name="log-in-outline" id={ styles.navIconsHome } />
                Login
              </Link>
            )
          }
        </nav>
      </header>
    );
  }
}
