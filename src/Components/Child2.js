import React, { useReducer } from 'react';
import Reducer from './Reducer';

function Child2(){
    const [state, dispatch] = useReducer(Reducer, 52)
    return(
        <div>
            <h3>Child 2 number: {state}</h3>
            <p>Child 2 is using useReducer</p>
            <br/>
            <button onClick={() => {dispatch({type:"INCREMENT", val:50})}}>INCREMENT</button>
            <button onClick={() => {dispatch({type:"DECREMENT", val:25})}}>DECREMENT</button>
        </div>
    )
}
export default Child2;