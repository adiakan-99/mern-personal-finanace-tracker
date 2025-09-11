import { useEffect, useState } from "react";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import Charts from "../components/Charts";
import { getTransactions } from "../api";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // ✅ loading state

  // Filters
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    setLoading(true); // start loading
    getTransactions()
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setTransactions(sorted);
      })
      .catch(() => setError("Failed to load transactions"))
      .finally(() => setLoading(false)); // stop loading
  }, []);

  // Apply filters
  const filteredTransactions = transactions
    .filter((tx) => category === "All" || tx.category === category)
    .filter(
      (tx) =>
        type === "All" ||
        (type === "Income" && tx.category === "Income") ||
        (type === "Expense" && tx.category !== "Income")
    )
    .filter((tx) => (!fromDate || new Date(tx.date) >= new Date(fromDate)))
    .filter((tx) => (!toDate || new Date(tx.date) <= new Date(toDate)));

  // Reset all filters
  const clearFilters = () => {
    setCategory("All");
    setType("All");
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Full-width Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 w-full px-4 py-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 items-end">
          {/* Category Filter */}
          <select
            className="border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Income">Income</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>

          {/* Type Filter */}
          <select
            className="border p-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          {/* Date Range */}
          <input
            type="date"
            className="border p-2 rounded"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 rounded"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Clear Filters
          </button>
        </div>

        {/* Summary */}
        <Summary transactions={filteredTransactions} />

        {/* Charts */}
        <Charts transactions={filteredTransactions} />

        {error && <p className="text-red-500">{error}</p>}

        {/* Transaction List or Loader */}
        {loading ? (
          <div className="flex justify-center mt-6">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-600">Loading...</span>
          </div>
        ) : (
          <TransactionList transactions={filteredTransactions} />
        )}
      </main>
    </div>
  );
}

export default Home;
