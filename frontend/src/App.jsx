import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddTransaction from "./pages/AddTransaction";
import EditTransaction from "./pages/EditTransaction";
import DeleteTransaction from "./pages/DeleteTransaction";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        {/* Simple Navbar */}
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/add" className="text-blue-600 hover:underline">Add</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTransaction />} />
          <Route path="/:id/edit" element={<EditTransaction />} />
          <Route path="/:id/delete" element={<DeleteTransaction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
