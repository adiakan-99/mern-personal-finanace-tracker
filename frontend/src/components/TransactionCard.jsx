import { Link } from "react-router-dom";

function TransactionCard({ transaction }) {
  // ✅ Format date as dd-mm-yyyy
  const dateObj = new Date(transaction.date);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = dateObj.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="border p-4 mb-2 rounded-lg shadow-sm">
      <h2 className="font-semibold text-lg">{transaction.title}</h2>
      <p>Amount: ₹{transaction.amount}</p>
      <p>Date: {formattedDate}</p>
      <p>Category: {transaction.category}</p>

      <div className="mt-2 flex gap-2">
        <Link to={`/${transaction._id}/edit`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Edit
          </button>
        </Link>
        <Link to={`/${transaction._id}/delete`}>
          <button className="bg-red-500 text-white px-3 py-1 rounded">
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionCard;
