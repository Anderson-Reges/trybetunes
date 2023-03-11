import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className={ styles.footerContainer }>
        <Link
          to={ { pathname: 'https://github.com/Anderson-Reges' } }
          target="_blank"
        >
          @Anderson-Reges
        </Link>
        <p>Feito por min com o ❤️</p>
      </div>
    );
  }
}
