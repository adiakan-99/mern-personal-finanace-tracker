import { Link } from "react-router-dom";

function TransactionCard({ transaction }) {
  const formattedDate = new Date(transaction.date).toLocaleDateString("en-GB");

  // ✅ Decide sign & color based on category
  const isIncome = transaction.category === "Income";
  const amountClass = isIncome ? "text-green-600" : "text-red-600";
  const sign = isIncome ? "+" : "-";

  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm mb-2">
      <div>
        <h4 className="font-medium">{transaction.title}</h4>
        <p className="text-sm text-gray-500">
          {formattedDate} • {transaction.category}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className={`font-bold ${amountClass}`}>
          {sign}₹{transaction.amount}
        </span>
        <Link to={`/${transaction._id}/edit`}>
          <button className="text-blue-500 hover:underline">Edit</button>
        </Link>
        <Link to={`/${transaction._id}/delete`}>
          <button className="text-red-500 hover:underline">Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionCard;
