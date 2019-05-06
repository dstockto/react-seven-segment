import React, {useState} from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';
import Colors from "./Components/Colors";
import useInterval from './Helpers/useInterval';

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
          className={'greenglow'}
          colors={Colors.green}
        />
      </div>
    </div>
  );
}

export default App;
