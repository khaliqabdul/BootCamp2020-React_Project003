//import logo from './logo.svg';
import Parent from './Parent';
import './App.css';
import React,{ useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  
  return (
    <div className="App">
      
        <h1>App Component</h1>
        <p>passing values from app to child via parent</p>
        <Parent num={number}/>
        <button onClick={()=>setNumber(number + 1)}>Update Number</button>
        <br/>
        <p>when we update value by pressing this button in app component whole 
        heirarchi will update and showing the updated number
        This is the actual drawback, that whole tree needs to be updated.
        So we resolve this issue by using context
        </p>
    </div>
  );
}

export default App;
