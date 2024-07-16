import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className=" bg-yellow-500 text-blue-900 p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-blue-800 text-sm">{task.description}</p>
      <button className="bg-blue-400 px-2 py-1 rounded-md mt-4 hover:bg-green-500" onClick={() => deleteTask(task.id)}>
        Resolver
      </button>
    </div>
  );
}

export default TaskCard;
