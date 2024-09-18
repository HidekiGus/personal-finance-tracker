import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/transactions';

export const getTransactions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    return 1;
  }
};

export const addTransaction = async ({ title, amount, category, tipo }) => {
  const response = await axios.post(API_URL, { title, amount, category, type: tipo });
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
