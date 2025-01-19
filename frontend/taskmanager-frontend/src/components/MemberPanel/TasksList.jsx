import React from "react";

function TasksList({ tasks, onChatSelect, selectedChat }) {
  function openChat(chat) {
    if (onChatSelect) {
      onChatSelect(chat);
    }
  }

  return (
    <ul className="mt-4 px-4 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex cursor-pointer items-center px-3 py-2 rounded-md transition ${
            selectedChat?.type === "task" && selectedChat?.name === task.name
              ? "bg-blue-500 text-white"
              : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => openChat({ type: "task", name: task.name })}
        >
          <span className="font-medium">{task.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
