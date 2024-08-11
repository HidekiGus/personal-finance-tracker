import React, { useEffect } from 'react';
import { useTransactions } from '../context/TransactionsContext';
import { getTransactions, deleteTransaction } from '../utils/api';

const TransactionList = () => {
  const { state, dispatch } = useTransactions();

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      dispatch({ type: 'SET_TRANSACTIONS', payload: transactions });
    };
    fetchTransactions();
  }, [dispatch]);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {state.transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
            <button onClick={() => handleDelete(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
