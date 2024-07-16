import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSub = (e) => {
    e.preventDefault();
    addTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSub} className="bg-gradient-to-b from-slate-800 to-slate-600 p-10 mb-10 ">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">Creador de tareas KANBAN</h1>
       <input
        placeholder="Título de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
        required
      />
      <textarea 
        placeholder="Descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
        required
      ></textarea>
     <button className="bg-gray-800  text-white px-2 py-1 rounded-md mt-4 hover:bg-blue-300">Crear</button>
    </form>
    </div>
    );
    }
    
    export default TaskForm;
