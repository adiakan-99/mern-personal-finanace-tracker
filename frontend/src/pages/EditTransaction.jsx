import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";

function EditTransaction() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Edit Transaction
        </h2>
        <TransactionForm isEdit />
      </main>
    </div>
  );
}

export default EditTransaction;
