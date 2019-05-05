import React, {useState} from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';
import Colors from "./Components/Colors";

function App() {

  const [counter, setCount] = useState(0);

  function incrememt() {
    setCount(counter + 1);
  }

  return (
    <div className="App">
      <button onClick={incrememt}>Count!</button>
      <div className={"container"}>
        <InputToSevenSegments
          number={'#  ' + counter}
          className={'greenglow'}
          colors = {Colors.green}
          />
      </div>
    </div>
  );
}

export default App;
