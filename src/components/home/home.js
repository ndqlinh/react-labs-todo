import React from 'react';
import logo from '../../images/logo.svg';

function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default Home;
