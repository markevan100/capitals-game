import React from 'react';
import './App.css';
import GameEnd from './GameEnd/GameEnd'
import MainContainer from './MainContainer/MainContainer'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={MainContainer} />
          <Route path="/game-end" component={GameEnd} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
