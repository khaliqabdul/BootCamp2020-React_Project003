import React from 'react';
import Child from './Child';

function Parent(props) {
    return (
      <div >
        <h2>Parent Component</h2>
        just passing values
        <Child num={props.num}/>
      </div>
    );
  }
  
  export default Parent;
  