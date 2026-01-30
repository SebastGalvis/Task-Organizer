import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    onAddTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 rounded-md px-3 py-2 text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium"
      >
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
