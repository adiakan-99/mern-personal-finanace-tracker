import Header from "../components/Header";
import DeleteModal from "../components/DeleteModal";

function DeleteTransaction() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <DeleteModal />
      </div>
    </div>
  );
}

export default DeleteTransaction;
