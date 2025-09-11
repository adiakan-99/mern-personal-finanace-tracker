import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/transactions",
});

// ✅ Get all transactions
export const getTransactions = async () => {
  try {
    const res = await API.get("/");
    return res.data;
  } catch (err) {
    console.error("Error fetching transactions:", err);
    throw err;
  }
};

// ✅ Get single transaction by ID
export const getTransactionById = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error fetching transaction ${id}:`, err);
    throw err;
  }
};

// ✅ Create new transaction
export const createTransaction = async (data) => {
  try {
    const res = await API.post("/", data);
    return res.data;
  } catch (err) {
    console.error("Error creating transaction:", err);
    throw err;
  }
};

// ✅ Update transaction
export const updateTransaction = async (id, data) => {
  try {
    const res = await API.put(`/${id}`, data);
    return res.data;
  } catch (err) {
    console.error(`Error updating transaction ${id}:`, err);
    throw err;
  }
};

// ✅ Delete transaction
export const deleteTransaction = async (id) => {
  try {
    const res = await API.delete(`/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error deleting transaction ${id}:`, err);
    throw err;
  }
};
