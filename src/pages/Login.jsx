import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

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
    const loadingElement = <h2>Carregando...</h2>;
    const { disabled, redirect, loading } = this.state;
    return (
      <div data-testid="page-login">
        { loading ? loadingElement : (
          <div>
            {' '}
            <h1>Login</h1>
            <input
              data-testid="login-name-input"
              type="text"
              onChange={ this.handleChange }
              name="inputName"
              maxLength="100"
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ disabled }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </div>)}
        { redirect && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
