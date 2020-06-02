import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sign in</p>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </header>
    </div>
  );
}

export default App;
