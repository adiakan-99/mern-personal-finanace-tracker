import Header from "../components/Header";
import DeleteModal from "../components/DeleteModal";

function DeleteTransaction() {
  return (
    <div>
      <Header />
      <h2 className="text-lg font-bold mb-4">Delete Transaction</h2>
      <DeleteModal />
    </div>
  );
}

export default DeleteTransaction;
