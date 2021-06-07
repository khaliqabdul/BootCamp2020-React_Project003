import React, { useContext } from 'react';
import { ValueContext } from './ValueContext';

function TransactionList() {
    const { state } = useContext(ValueContext)
    const { deleteTransaction } = useContext(ValueContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {state.map((state) =>
                (<li className={state.Amount < 0 ? "minus" : "plus"} key={state.id}>
                    {state.Text} <span>Rs. {state.Amount}</span>
                    <button className="delete-btn" onClick={() => { deleteTransaction(state.id) }}>x</button>
                </li>))}
            </ul>
        </div>
    )
}
export default TransactionList;