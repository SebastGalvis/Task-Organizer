import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";


function Home() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <main className="p-6 max-w-xl mx-auto">
        <TaskForm onAddTask={addTask} />
        <TaskList
  tasks={tasks}
  onToggleTask={toggleTask}
  onDeleteTask={deleteTask}
/>

      </main>
    </div>
  );
}



export default Home;


