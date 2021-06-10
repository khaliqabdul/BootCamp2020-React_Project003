import React, { useContext, useState } from 'react';
import { ValueContext } from './ValueContext';

function AddTransaction() {
    let [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const { addTransaction } = useContext(ValueContext);

    const onSubmit = (e) => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            Text: text,
            Amount: +amount
        }
        addTransaction(newTransaction)
        setText("");
        setAmount("");
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="Description">Description</label>
                    <input  type="text"
                            placeholder="Enter Text..."
                            onChange={(e) => setText(e.target.value)}
                            required="required"
                            value={text}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="Transactionamount">
                        Transaction Amount <br />
                        (Negative - Expense, Positive - Income)
                    </label>
                    <input  type="number" 
                            placeholder="Enter Amount..." 
                            onChange={(e) => setAmount(e.target.value)} 
                            required="required"
                            value={amount}
                        />
                </div>
                <button className="btn">Add Transaction </button>
            </form>
        </div>
    )
}
export default AddTransaction;