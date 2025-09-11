import { Link } from "react-router-dom";

function TransactionCard({ transaction }) {
  return (
    <div className="border p-4 mb-2">
      <h2>{transaction.title}</h2>
      <p>Amount: ₹{transaction.amount}</p>
      <p>Date: {transaction.date}</p>
      <p>Category: {transaction.category}</p>

      <div className="mt-2 flex gap-2">
        <Link to={`/${transaction._id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/${transaction._id}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionCard;
