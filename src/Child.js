function Child(props) {
    return (
      <div >
        <h3>Child Component</h3>
        Receiving Values here
        <br/>
        <h3>{props.num}</h3>
      </div>
    );
  }
  
  export default Child;