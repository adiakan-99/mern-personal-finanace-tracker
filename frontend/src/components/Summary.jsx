function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-sm text-gray-500">Income</h3>
        <p className="text-2xl font-bold text-green-600">₹{income}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-sm text-gray-500">Expense</h3>
        <p className="text-2xl font-bold text-red-600">₹{Math.abs(expense)}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-sm text-gray-500">Balance</h3>
        <p className="text-2xl font-bold text-blue-600">₹{balance}</p>
      </div>
    </div>
  );
}

export default Summary;
