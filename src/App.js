import React, {useState} from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';
import Colors from "./Components/Colors";
import useInterval from './Helpers/useInterval';
import SevenSegment from "./Components/SevenSegment";

function App() {

  const [counter, setCount] = useState(0);

  function incrememt() {
    setCount(counter + 1);
  }

  useInterval(incrememt, 50);

  return (
    <div className="App">
      <button onClick={incrememt}>Count!</button>
      <div className={"container"}>
        <InputToSevenSegments
          number={'#  ' + counter}
          className={'purpleglow'}
          colors={Colors.purple}
        />
        <InputToSevenSegments number={'Error#867-5309'} colors={Colors.red} className={'redglow'} />
      </div>
    </div>
  );
}

export default App;
