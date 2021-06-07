import React, { useReducer, createContext } from 'react';
import Reducer from './Reducer';
// initial state
const transactions = []
// createContext
export const ValueContext = createContext();

// create Provider
const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, transactions);
    // Add Transaction
    function addTransaction(newTransaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: newTransaction
        })
        
    }
    // Delete Transaction
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return(
        <ValueContext.Provider value={{state, addTransaction, deleteTransaction}}>
            {children}
        </ValueContext.Provider>
    )
}
export default GlobalProvider;


