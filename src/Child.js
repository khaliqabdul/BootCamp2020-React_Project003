import { useContext } from "react";
import ValueContext from "./ValueContext";

function Child() {
  let value = useContext(ValueContext);
    return (
      <div >
        <h3>Child number is</h3>
        Receiving Values here by useContext
        <br/>
        <h3>{value}</h3>
      </div>
    );
  }
  
  export default Child;