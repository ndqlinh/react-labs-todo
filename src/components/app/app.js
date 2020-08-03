import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import logo from '../../images/logo.svg';
import Home from '../home/home';
import TodoList from '../todos/todo-list';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand pd-0" to="/">
            <img src={logo} className="header-logo" width="50" height="50" loading="lazy" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact={true} activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/todos">Todos</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todos">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
