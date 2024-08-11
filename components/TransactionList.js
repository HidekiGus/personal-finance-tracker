import React, { useEffect } from 'react';
import { useTransactions } from '../context/TransactionsContext';
import { getTransactions, deleteTransaction } from '../utils/api';

const TransactionList = () => {
  // const { state, dispatch } = useTransactions();

  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     const transactions = await getTransactions();
  //     dispatch({ type: 'SET_TRANSACTIONS', payload: transactions });
  //   };
  //   fetchTransactions();
  // }, [dispatch]);

  // const handleDelete = async (id) => {
  //   await deleteTransaction(id);
  //   dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  // };

  return (
    <>
      <h2>Transactions</h2>
      {/* <div>
        {state.transactions.length > 0 ? "Você não tem transações" : null}
        {state.transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
            <Botao onClick={() => handleDelete(transaction.id)}>Delete</Botao>
          </li>
        ))
      </div> */}
    </>
  );
};

export default TransactionList;
