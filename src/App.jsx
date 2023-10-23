import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.config.js';
import './App.css';
import Red from './Red';
import Blue from './Blue';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
}

function Blue() {
  return (
    <div style={{ backgroundColor: 'blue', height: '100vh' }}>
      <h2>BLUE</h2>
    </div>
  );
}

function Red() {
  return (
    <div style={{ backgroundColor: 'red', height: '100vh' }}>
      <h2>RED</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <ul>
            <li>
              <Link to="/blue">Blue</Link>
            </li>
            <li>
              <Link to="/red">Red</Link>
            </li>
          </ul>
        </div>
        <div id="main-section">
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
        </div>
      </div>
    </Router>
  );
}

export default App;
