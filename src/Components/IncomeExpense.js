import React, { useContext } from 'react';
import { ValueContext } from './ValueContext';
function IncomeExpense() {
    const { state } = useContext(ValueContext)

    const amount = state.map(state => state.Amount);
    const expense = amount.filter(amount => amount <= 0).reduce((total, num)=> (total += num),0).toFixed(2);
    const income = amount.filter(amount => amount >= 0).reduce((total, num)=> (total += num),0).toFixed(2);
        
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">Rs. {income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">Rs. {expense}</p>
            </div>
        </div>
    )
}
export default IncomeExpense;