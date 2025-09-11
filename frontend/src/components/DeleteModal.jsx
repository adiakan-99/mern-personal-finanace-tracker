import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DeleteModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`/api/transactions/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
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
