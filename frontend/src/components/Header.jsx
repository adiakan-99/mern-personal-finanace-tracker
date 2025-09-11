import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
      <Link to="/add">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
          Add Transaction
        </button>
      </Link>
    </header>
  );
}

export default Header;
