import React, { useContext, useState } from "react";
import { ValueContext } from "./ValueContext";

function Balance() {
  const {state} = useContext(ValueContext);
  const amount = state.map((transaction) => transaction.Amount)
  const total = amount.reduce((total, num) => (total += num),0).toFixed(2)
  // clock
  const [time, setTime] = useState(getTime());
  function getTime(){
    const currentTime = new Date().toLocaleTimeString();
    return(currentTime)
  }
  const updateTime = ()=>setTime(getTime());
  setInterval(updateTime,1000);

  return (
    <>
      <div className="container" >
        <h2> Your Balance</h2><h2>{time}</h2>
      </div>
      <h1> Rs. {total} </h1>
    </>
  );
}

export default Balance;