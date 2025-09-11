import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";

function AddTransaction() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Add Transaction
        </h2>
        <TransactionForm />
      </main>
    </div>
  );
}

export default AddTransaction;
