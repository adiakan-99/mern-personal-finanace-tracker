import { useNavigate, useParams } from "react-router-dom";
import { deleteTransaction } from "../api";

function DeleteModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteTransaction(id);
      navigate("/");
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-red-600 mb-4">Delete Transaction</h2>
      <p className="mb-4">
        Are you sure you want to delete this transaction?
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
