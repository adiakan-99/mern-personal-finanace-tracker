import { useEffect, useState } from "react";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import { getTransactions } from "../api";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTransactions()
      .then(setTransactions)
      .catch(() => setError("Failed to load transactions"));
  }, []);

  // ✅ Calculate income, expense, and balance
  const income = transactions
    .filter((t) => t.category === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.category !== "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <Header />

      {/* ✅ Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm text-gray-500">Income</h3>
          <p className="text-2xl font-bold text-green-600">₹{income}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm text-gray-500">Expense</h3>
          <p className="text-2xl font-bold text-red-600">₹{expense}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm text-gray-500">Balance</h3>
          <p
            className={`text-2xl font-bold ${
              balance >= 0 ? "text-blue-600" : "text-red-600"
            }`}
          >
            ₹{balance}
          </p>
        </div>
      </div>

      {error && <p className="text-red-500 px-4">{error}</p>}

      <TransactionList />
    </div>
  );
}

export default Home;
