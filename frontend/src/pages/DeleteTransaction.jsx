import { useParams } from "react-router-dom";

function DeleteTransaction() {
  const { id } = useParams();
  return <h1 className="text-2xl font-semibold">🗑️ Delete Transaction ID: {id}</h1>;
}
export default DeleteTransaction;
