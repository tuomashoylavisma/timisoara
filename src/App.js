import React from 'react';
import './App.css'
import TreeContainer from './TreeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: 'yellow'}}>Multi-root tree</h1>
        <div style={{fontSize: '0.6em', paddingBottom: '14px'}}><i>From flat to tree structure example</i></div>
        <TreeContainer />
      </header>
    </div>
  );
}

export default App;
