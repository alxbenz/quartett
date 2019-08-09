import React from 'react';
// import MainMenu from './components/MainMenu';
// import GameBoard from './components/GameBoard';
import Mockup from './components/Mockup';

function App() {
  return (
    <div className="App">
      <Mockup />
      <div style={{ margin: '10px' }}>--------------</div>
      {/* <div>
        <span>HIER MUSS VERMUTLICH DER ROUTER HIN</span>
        <div>
          <MainMenu />
          <GameBoard />
        </div>
      </div> */}
    </div>
  );
}

export default App;
