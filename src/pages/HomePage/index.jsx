import React, { Component } from 'react';
import Header from '../../components/Header';
import styles from './styles.module.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={ styles.containerHome }>
          <h2>Aqui na DB você tem um banco de dados inteiro de musicas!!!</h2>
          <div className={ styles.buttonBox }>
            <h3>Vem de DB e tenha um gostinho das mais diversas musicas</h3>
            <input type="button" value="Escute previas agora" />
          </div>
        </div>
      </div>
    );
  }
}
