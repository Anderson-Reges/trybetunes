import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import styles from './styles.module.scss';

class Login extends React.Component {
  state = {
    inputName: '',
    loading: false,
    disabled: true,
    redirect: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { inputName } = this.state;
        const LENGTH = 3;
        if (inputName.length >= LENGTH) {
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

  handleClick = async (event) => {
    event.preventDefault();
    const { inputName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: inputName });
    this.setState({ redirect: true });
  };

  render() {
    const { disabled, redirect, loading } = this.state;
    return (
      <div className={ styles.containerLogin }>
        { loading ? <Loading /> : (
          <div className={ styles.cardLogin }>
            {' '}
            <div className={ styles.formLogin }>
              <h1>
                <Link to="/">
                  DB Music
                </Link>
              </h1>
              <h3>Login</h3>
              <div className={ styles.inputBox }>
                <p>Usuário</p>
                <input
                  autoComplete="off"
                  data-testid="login-name-input"
                  type="text"
                  onChange={ this.handleChange }
                  name="inputName"
                  maxLength="100"
                />
                <ion-icon name="person-outline" />
              </div>
              <div className={ styles.buttonBox }>
                <button
                  type="button"
                  data-testid="login-submit-button"
                  disabled={ disabled }
                  onClick={ this.handleClick }
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>)}
        { redirect && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
