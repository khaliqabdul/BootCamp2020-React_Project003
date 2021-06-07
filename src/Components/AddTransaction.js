import React, { useContext, useState } from 'react';
import { ValueContext } from './ValueContext';

function AddTransaction() {
    let [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(ValueContext);
    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label>Text</label>
                    <input type="text" placeholder="Enter Text..." onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>
                        Amount <br />
                    (Negative - Expense, Positive - Income)
                    </label>
                    <input type="number" placeholder="Enter Amount..." onChange={(e) => setAmount(e.target.value)} />
                </div>
            </form>
            <button className="btn"
                onClick={() => {
                    const newTransaction = {
                            id: Math.floor(Math.random() * 100000000),
                            Text: text,
                            Amount: +amount
                        }
                    addTransaction(newTransaction)
                }}>
                Add Transaction
            </button>

        </div>
    )
}
export default AddTransaction;