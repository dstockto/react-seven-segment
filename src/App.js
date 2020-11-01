import React from 'react';

import './App.css';
import {Bouncer} from "./Components/Bouncer";
import Colors from "./Components/Colors";

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <Bouncer
          number={'boobiEs'}
          colors={Colors.pink}
          className={'pinkglow'}
          size={14}
          speed={250}
        />
        <Bouncer
          number={'balls'}
          className={'blueglow'}
          colors={Colors.blue}
          size={14}
        />
        <Bouncer
          number={'Error'}
          className={'greenglow'}
          colors={Colors.green}
          size={14}
          speed={100}
        />

      </div>
    </div>
  );
}

export default App;
