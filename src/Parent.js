import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent() {
    return (
      <div >
        <h2>Parent Component</h2>
        <p>Now it is not passing any value, but child receives directly</p>
        <hr/>
        <Child/>
        <hr/>
        <Child2/>
      </div>
    );
  }
  
  export default Parent;
  