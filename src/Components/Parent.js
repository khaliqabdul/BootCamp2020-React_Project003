import React from 'react';
import './style.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import GlobalProvider from './ValueContext';


function Parent() {
  return (
      <GlobalProvider>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
      </GlobalProvider>
  );
}

export default Parent;
