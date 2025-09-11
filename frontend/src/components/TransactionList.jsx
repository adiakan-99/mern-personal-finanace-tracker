import TransactionCard from "./TransactionCard";

function TransactionList({ transactions = [], error = "" }) {
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">
            No transactions found. Add one to get started!
        </p>
      ) : (
        transactions
          // ✅ Sort transactions by date (latest first)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((t) => <TransactionCard key={t._id} transaction={t} />)
      )}
    </div>
  );
}

export default TransactionList;
