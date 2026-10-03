import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const [transactions, setTransactions] = useState([]);

  // Add Transaction
  const addTransaction = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      type: type,
      category: category,
    };

    setTransactions([...transactions, newTransaction]);

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id,
    );

    setTransactions(updatedTransactions);
  };

  // Total Income
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Total Expense
  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Balance
  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Expense Tracker
        </h1>

        {/* Summary */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="flex-1 rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Total Income</p>
            <h2 className="mt-2 text-2xl font-bold text-green-600">
              Rs. {totalIncome}
            </h2>
          </div>

          <div className="flex-1 rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Total Expense</p>
            <h2 className="mt-2 text-2xl font-bold text-red-600">
              Rs. {totalExpense}
            </h2>
          </div>

          <div className="flex-1 rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Balance</p>
            <h2 className="mt-2 text-2xl font-bold text-blue-600">
              Rs. {balance}
            </h2>
          </div>
        </div>

        {/* Add Transaction Form */}
        <form
          onSubmit={addTransaction}
          className="mb-8 rounded-xl bg-white p-6 shadow"
        >
          <h2 className="mb-5 text-xl font-semibold text-gray-800">
            Add Transaction
          </h2>

          <div className="flex flex-col gap-4">
            {/* Title */}
            <input
              type="text"
              placeholder="Transaction title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {/* Amount */}
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {/* Type */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Salary">Salary</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Add Transaction
            </button>
          </div>
        </form>

        {/* Transaction List */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-semibold text-gray-800">
            Transactions
          </h2>

          {transactions.length === 0 ? (
            <p className="py-6 text-center text-gray-500">
              No transactions yet.
            </p>
          ) : (
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col gap-3 rounded-lg bg-gray-100 p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {transaction.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {transaction.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-semibold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"} Rs.{" "}
                      {transaction.amount}
                    </span>

                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;