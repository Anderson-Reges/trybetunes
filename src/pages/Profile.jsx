import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile" className="input-search-tags-page">
        <Header />
        <p>Profile</p>
      </div>
    );
  }
}

export default Profile;
