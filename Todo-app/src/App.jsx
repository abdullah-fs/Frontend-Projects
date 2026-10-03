import { useState } from "react";

function App() {
  // Input ki value store karna
  const [input, setInput] = useState("");

  // Todos ko array mein store karna
  const [todos, setTodos] = useState([]);

  // Todo add karna
  const addTodo = () => {
    if (input.trim() === "") {
      return;
    }

    setTodos([...todos, input]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Todo App
        </h1>

        {/* Input + Add Button */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />

          <button
            onClick={addTodo}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Todos */}
        <div className="mt-6 space-y-3">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3"
            >
              <p className="text-gray-700">{todo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
