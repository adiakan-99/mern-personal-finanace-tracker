import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">💰 Personal Finance Tracker</h1>
      <Link to="/add">
        <button>Add Transaction</button>
      </Link>
    </header>
  );
}

export default Header;
