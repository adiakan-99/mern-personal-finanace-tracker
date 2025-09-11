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
    <div>
      <h2>Are you sure you want to delete this transaction?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default DeleteModal;
