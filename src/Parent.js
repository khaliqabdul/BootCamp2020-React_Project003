import React from 'react';
import Child from './Child';

function Parent() {
    return (
      <div >
        <h2>Parent Component</h2>
        Now it is not passing any value, but child receives directly
        <Child/>
      </div>
    );
  }
  
  export default Parent;
  