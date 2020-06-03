import React from 'react';
import '../styles/App.css';
import Game from './game/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">
          PHASED
        </p>
      </header>
      <Game highScore={10}/>
    </div>
  );
}

export default App;
