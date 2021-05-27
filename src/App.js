//import logo from './logo.svg';
import Parent from './Parent';
import './App.css';
import React,{ useState } from 'react';
import ValueContext from './ValueContext';

function App() {
  //const [number, setNumber] = useState(0);
  let value = useState(0);
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
          <h1>App Component</h1>
          <Parent/>
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;
