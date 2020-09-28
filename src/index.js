import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './pages/Amans199';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <Router>
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
    <React.StrictMode>
      <Switch>
        {/* <Route path="/">
          <App />
        </Route> */}
        {/* <Route path="/users-list">
          <p>
            lorem ibsum
          </p>
        </Route> */}
        <Route path="/users-list/user">
          <App />
        </Route>
        <Route path="/users-list/user/amans199">
          <User />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
