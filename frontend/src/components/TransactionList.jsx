import { useEffect, useState } from "react";
import { getTransactions } from "../api";
import TransactionCard from "./TransactionCard";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTransactions()
      .then((data) => {
        // ✅ Sort transactions by date (latest first)
        const sorted = [...data].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setTransactions(sorted);
      })
      .catch(() => setError("Failed to load transactions"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((t) => (
          <TransactionCard key={t._id} transaction={t} />
        ))
      )}
    </div>
  );
}

export default TransactionList;
