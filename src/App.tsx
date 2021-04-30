import React from 'react';

import './App.css';
import VendingMachine from './layouts/VendingMachine/VendingMachine';

const App = ():JSX.Element => {
  return (
    <div className="App">
      <div className="content-container">
        <VendingMachine />
      </div>
    </div>
  );
}

export default App;
