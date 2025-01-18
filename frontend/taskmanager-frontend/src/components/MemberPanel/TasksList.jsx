import React from "react";

function TasksList({ tasks }) {
  return (
    <ul className="mt-4 px-4 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex cursor-pointer items-center px-3 py-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <span className="text-black dark:text-white font-medium">
            {task.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
