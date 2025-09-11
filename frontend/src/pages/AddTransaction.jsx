import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";

function AddTransaction() {
  return (
    <div>
      <Header />
      <h2 className="text-lg font-bold mb-4">Add New Transaction</h2>
      <TransactionForm />
    </div>
  );
}

export default AddTransaction;
