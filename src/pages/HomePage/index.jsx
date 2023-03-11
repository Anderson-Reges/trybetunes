import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.module.scss';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Header location={ location } />
        <div className={ styles.containerHome }>
          <h2>Aqui na DB você tem um banco de dados inteiro de musicas!!!</h2>
          <div className={ styles.buttonBox }>
            <h3>Vem de DB e tenha um gostinho das mais diversas musicas</h3>
            <input type="button" value="Escute previas agora" />
          </div>
        </div>
        <div className={ styles.containerBody }>
          <h2>Porque a DB?</h2>
          <div className={ styles.containerCards }>
            <span className={ styles.card }>
              <ion-icon name="server-outline" />
              <p>
                Temos o maior banco de dados
                recheados de diversas musicas e com as mais variadas bandas
              </p>
            </span>
            <span className={ styles.card }>
              <ion-icon name="heart-half-outline" />
              <p>
                Aqui na DB você pode guarda suas musicas
                favoritas para escutar onde quando quiser
              </p>
            </span>
            <span className={ styles.card }>
              <ion-icon name="time-outline" />
              <p>
                Estamos disponiveis 24h por dia e a alguns cliques de você
              </p>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object,
}.isRequired;
