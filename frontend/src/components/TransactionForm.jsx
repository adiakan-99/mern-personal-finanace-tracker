import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTransaction,
  updateTransaction,
  getTransactionById,
} from "../api";

function TransactionForm({ isEdit = false }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "Other",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Pre-fill form if editing
  useEffect(() => {
    if (isEdit && id) {
      getTransactionById(id)
        .then((data) => setFormData(data))
        .catch((err) => console.error(err));
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updateTransaction(id, formData);
      } else {
        await createTransaction(formData);
      }
      navigate("/");
    } catch (err) {
      console.error("Error saving transaction:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date ? formData.date.substring(0, 10) : ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Income</option>
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
          <option>Entertainment</option>
          <option>Utilities</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit">{isEdit ? "Update" : "Add"} Transaction</button>
    </form>
  );
}

export default TransactionForm;
