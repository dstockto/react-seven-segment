import React from 'react';

import './App.css';
import SevenSegmentAdapter from './Components/SevenSegmentAdapter';

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <SevenSegmentAdapter />
        <SevenSegmentAdapter number={0} />
        <SevenSegmentAdapter number={1} />
        <SevenSegmentAdapter number={2} />
        <SevenSegmentAdapter number={3} />
        <SevenSegmentAdapter number={4} />
        <SevenSegmentAdapter number={5} />
        <SevenSegmentAdapter number={6} />
        <SevenSegmentAdapter number={7} />
        <SevenSegmentAdapter number={8} />
        <SevenSegmentAdapter number={9} />
        <SevenSegmentAdapter number={null} />
      </div>
    </div>
  );
}

export default App;
