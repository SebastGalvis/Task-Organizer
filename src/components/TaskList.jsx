function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-slate-400">
        No hay tareas todavía ✨
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => onToggleTask(task.id)}
          className={`flex justify-between items-center cursor-pointer px-4 py-2 rounded-md transition
            ${
              task.completed
                ? "bg-green-700 line-through text-slate-300"
                : "bg-slate-800 hover:bg-slate-700"
            }
          `}
        >
          <span>{task.text}</span>

          <button
            onClick={(e) => {
              e.stopPropagation(); // 🔥 CLAVE
              onDeleteTask(task.id);
            }}
            className="text-red-400 hover:text-red-600 font-bold"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;


