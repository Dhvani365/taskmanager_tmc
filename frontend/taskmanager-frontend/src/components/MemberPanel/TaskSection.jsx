import React from "react";
import SearchComponent from "./SearchComponent";
import { Separator } from "../ui/separator";
import TasksList from "./TasksList";

const tasks = [
  {
    id: "task1",
    name: "Task1",
  },
  {
    id: "task2",
    name: "Task2",
  },
];

function TaskSection({ tasks,onChatSelect,selectedChat }) {
  return (
    <div className="mt-2">
      <Separator className="h-[2px] bg-gray-400 w-full rounded-md mt-2 mb-2" />

      {/* Search Component */}
      <SearchComponent
        data={[
          {
            label: "Search Tasks",
            type: "tasks",
          },
        ]}
      />

      {/* Task Section Header */}
      <div className="flex items-center justify-between mt-4 px-4">
        <h3 className="text-md font-bold text-black dark:text-white">
          Tasks 
        </h3>
        <button className="text-sm pl-7 py-2 w-[140px] ml-[10px] bg-yellow-200 text-black rounded-md hover:bg-yellow-300 transition">
          + Add Tasks
        </button>
      </div>

      {/* Tasks List */}
      <TasksList tasks={tasks} onChatSelect={onChatSelect} selectedChat={selectedChat}/>
    </div>
  );
}

export default TaskSection;
