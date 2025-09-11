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
        .then((data) =>
          setFormData({
            title: data.title || "",
            amount: data.amount || "",
            date: data.date ? data.date.substring(0, 10) : "",
            category: data.category || "Other",
          })
        )
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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6"
    >
      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Amount */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
        >
          {isEdit ? "Update" : "Add"} Transaction
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-300 rounded-lg px-4 py-2 hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
