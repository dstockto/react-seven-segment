import React from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <InputToSevenSegments
          number={'3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'}
          colors={['#00CC00', '#11DD11', '#33DD33', '#44DD44']}
        />
      </div>
    </div>
  );
}

export default App;
