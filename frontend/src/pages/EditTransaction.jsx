import { useParams } from "react-router-dom";

function EditTransaction() {
  const { id } = useParams();
  return <h1 className="text-2xl font-semibold">✏️ Edit Transaction ID: {id}</h1>;
}
export default EditTransaction;
