import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

class ProfileEdit extends React.Component {
  state = {
    loading: false,
    name: '',
    email: '',
    image: '',
    description: '',
    disable: false,
    redirect: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { name, email, image, description } = await getUser();
    this.setState({
      name,
      email,
      image,
      description,
      loading: false,
    }, () => this.verifyEmail());
  }

  verifyEmail = () => {
    const { name, email, image, description } = this.state;
    const allowedEmail = email.includes('@');
    return (allowedEmail
      && name.length > 0
      && image.length > 0
      && email.length > 0
      && description.length > 0
    )
      ? this.setState({ disable: false })
      : this.setState({ disable: true });
  };

  getValues = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.verifyEmail());
  };

  handleClick = async () => {
    const { name, email, image, description } = this.state;
    this.setState({ loading: true });
    await updateUser({ name, email, image, description });
    this.setState({ redirect: true });
  };

  render() {
    const { loading, name, email, image, description, disable, redirect } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Profile Edit</h1>
        <label htmlFor="image">
          Foto do perfil:
          <input
            type="text"
            name="image"
            data-testid="edit-input-image"
            value={ image }
            onChange={ this.getValues }
          />
        </label>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            data-testid="edit-input-name"
            value={ name }
            onChange={ this.getValues }
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="edit-input-email"
            value={ email }
            onChange={ this.getValues }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Descrição"
            data-testid="edit-input-description"
            value={ description }
            onChange={ this.getValues }
          />
        </label>
        <input
          type="submit"
          data-testid="edit-button-save"
          value="Salvar"
          onClick={ this.handleClick }
          disabled={ disable }
        />
        {loading && <Loading />}
        {redirect && <Redirect to="/profile" /> }
      </div>
    );
  }
}

export default ProfileEdit;
