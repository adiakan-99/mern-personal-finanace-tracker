import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip as ReTooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#4CAF50",
  "#FF9800",
  "#FF5722",
  "#9C27B0",
  "#03A9F4",
  "#FFC107",
  "#E91E63",
  "#607D8B",
];

function Charts({ transactions = [] }) {
  // --- PIE: category-wise expenses ---
  // treat a tx as expense if category !== 'Income' OR amount < 0 (robust)
  const expenseTx = transactions.filter(
    (t) =>
      (t.category && t.category !== "Income") ||
      (typeof t.amount === "number" && t.amount < 0)
  );

  const expenseByCategory = {};
  expenseTx.forEach((t) => {
    const amt = Math.abs(Number(t.amount) || 0);
    const cat = t.category || "Other";
    expenseByCategory[cat] = (expenseByCategory[cat] || 0) + amt;
  });

  const pieData = Object.entries(expenseByCategory).map(([name, value]) => ({
    name,
    value,
  }));

  // --- BAR: monthly totals (YYYY-MM) ---
  const monthlyMap = new Map();
  const monthKey = (date) => {
    if (!date) return null;
    const d = new Date(date);
    if (isNaN(d)) return null;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    return `${y}-${m}`; // sorts lexicographically
  };

  transactions.forEach((t) => {
    const key = monthKey(t.date);
    if (!key) return;
    const incomeAmt =
      t.category === "Income" ? Math.abs(Number(t.amount) || 0) : 0;
    const expenseAmt = t.category !== "Income" ? Math.abs(Number(t.amount) || 0) : 0;

    const prev = monthlyMap.get(key) || { income: 0, expense: 0 };
    monthlyMap.set(key, {
      income: prev.income + incomeAmt,
      expense: prev.expense + expenseAmt,
    });
  });

  const monthlyData = Array.from(monthlyMap.entries())
    .map(([month, { income, expense }]) => ({ month, income, expense }))
    .sort((a, b) => (a.month > b.month ? 1 : -1)); // ascending by YYYY-MM

  // UX: if there is no expense data / monthly data show friendly text
  const hasPieData = pieData.length > 0;
  const hasMonthlyData = monthlyData.length > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
      {/* PIE: category-wise expenses */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Category-wise Expenses</h3>

        {!hasPieData ? (
          <p className="text-sm text-gray-500">No expense data to show.</p>
        ) : (
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label={(entry) => `${entry.name} (${Math.round(entry.value)})`}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <ReTooltip formatter={(value) => `₹${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* BAR: monthly income vs expense */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Monthly Income & Expense</h3>

        {!hasMonthlyData ? (
          <p className="text-sm text-gray-500">No monthly data to show.</p>
        ) : (
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value}`} />
                <Legend />
                <Bar dataKey="income" name="Income" fill="#4CAF50" />
                <Bar dataKey="expense" name="Expense" fill="#F44336" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

export default Charts;
