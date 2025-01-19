import React from "react";

const TaskTable = ({ tasks, onTaskClick }) => {
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Task Name</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border p-2">{task.name}</td>
              <td className="border p-2">
                <button
                  className="text-blue-500"
                  onClick={() => onTaskClick(task)}
                >
                  Open Chat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
