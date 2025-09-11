import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
      axios.get(`/api/transactions/${id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error(err));
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      axios.put(`/api/transactions/${id}`, formData)
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    } else {
      axios.post("/api/transactions", formData)
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit">{isEdit ? "Update" : "Add"} Transaction</button>
    </form>
  );
}

export default TransactionForm;
