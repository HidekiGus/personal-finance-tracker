import { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: [],
};

// Reducer function
const transactionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create Context
const TransactionsContext = createContext();

// Context Provider
export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <TransactionsContext.Provider value={{ state, dispatch, addTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

// Custom Hook
export const useTransactions = () => {
  return useContext(TransactionsContext);
};
