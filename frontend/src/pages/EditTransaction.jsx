import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";

function EditTransaction() {
  return (
    <div>
      <Header />
      <h2>Edit Transaction</h2>
      <TransactionForm isEdit />
    </div>
  );
}
export default EditTransaction;
