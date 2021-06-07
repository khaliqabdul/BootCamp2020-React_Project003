const Reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return [...state, action.payload]
        case "DELETE_TRANSACTION":
            return state.filter(state => state.id !== action.payload)  
        default:
            return state
    } 
}
export default Reducer;