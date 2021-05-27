import { useContext } from "react";
import ValueContext from "./ValueContext";

function Child() {
  let value = useContext(ValueContext);
  let updateValue = value[1]
    return (
      <div >
        <h3>Child 1 number is</h3>
        <p>Child 1 is using useContext</p> 
        <h3>{value[0]}</h3>
        <button onClick={()=>{ updateValue (++value[0])}}>Update value</button>
      </div>
    );
  }
  
  export default Child;