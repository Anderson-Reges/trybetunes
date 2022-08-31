import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Route exact path="/" component={ Login } />
        <Route path="/search" component={ Search }>
          <Header />
        </Route>
        <Route path="/album/:id" component={ Album }>
          <Header />
        </Route>
        <Route path="/favorites" component={ Favorites }>
          <Header />
        </Route>
        <Route exact path="/profile" component={ Profile }>
          <Header />
        </Route>
        <Route path="/profile/edit" component={ ProfileEdit }>
          <Header />
        </Route>
        <Route exact path="*" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
