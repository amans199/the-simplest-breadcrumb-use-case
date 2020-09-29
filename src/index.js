import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from "react-router-dom";
import Home from './pages/Home';
import UserList from './pages/UserList';
import User from './pages/User';
import Amans199 from './pages/Amans199';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users-list">Users List</Link>
          </li>
          <li>
            <Link to="/users-list/user">User</Link>
          </li>
          <li>
            <Link to="/users-list/user/amans199">amans199</Link>
          </li>
        </ul>
      </nav>
      <App />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users-list">
          <UserList />
        </Route>
        <Route exact path="/users-list/user">
          <User />
        </Route>
        <Route exact path="/users-list/user/amans199">
          <Amans199 />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router >
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
