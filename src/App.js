import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';

import './App.css';
import NavBar from './components/layout/NavBar';

import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import AlertState from './context/Alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/users/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};
export default App;
