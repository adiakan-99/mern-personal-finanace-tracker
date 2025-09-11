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

  const balance = transactions.reduce((acc, t) => {
        if (t.category === 'Income') {
            return acc + t.amount;
        } else {
            return acc - t.amount;
        }
    }, 0);

  return (
    <div>
      <Header />
      <h2 className="text-lg font-bold mb-4">Balance: ₹{balance}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <TransactionList />
    </div>
  );
}

export default Home;
