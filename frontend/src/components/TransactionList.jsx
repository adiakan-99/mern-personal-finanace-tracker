import { useEffect, useState } from "react";
import axios from "axios";
import TransactionCard from "./TransactionCard";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("/api/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

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
