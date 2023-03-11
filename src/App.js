import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/home" render={ (props) => <HomePage { ...props } /> } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
