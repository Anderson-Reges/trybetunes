import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import styles from './styles.module.scss';

class Profile extends React.Component {
  state = {
    user: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const user = await getUser();
    this.setState({
      loading: false,
      user,
    });
  }

  render() {
    const { user, loading } = this.state;
    const { name, email, description, image } = user;
    return (
      <div className={ styles.inputSearchMusics }>
        <Header />
        <h1>Profile</h1>
        {loading && <Loading />}
        <img src={ image } alt={ name } data-testid="profile-image" />
        <Link
          to="/profile/edit"
        >
          Editar perfil
        </Link>
        <h2>
          {name}
        </h2>
        <h2>
          {email}
        </h2>
        <h2>
          {description}
        </h2>
      </div>
    );
  }
}

export default Profile;
