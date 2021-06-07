//import logo from './logo.svg';
import ThemeToggler from './Context/ThemeToggler';
import Header from './Header';
import Main from './Context/Main';
import './App.css';
import React, { useState } from 'react';
//import ValueContext from './ValueContext';
import themeContext, { plusAmount } from './Context/themeContext';


function App() {
  const themeMode = useState("light");
  const [input, setInput] = useState(0);
  const [add, setAdd] = useState(0);
  console.warn(add);
  return (
    <div className="App">
      <themeContext.Provider value={themeMode}>
        <plusAmount.Provider value={add}>
          <Header />
          <Main />
          <br/>
          <input type="number" onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={()=>{setAdd(add + input)}} > Add Amount</button>
          <ThemeToggler />
        </plusAmount.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
