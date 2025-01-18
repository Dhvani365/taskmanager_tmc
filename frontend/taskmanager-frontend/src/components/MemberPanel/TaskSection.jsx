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
// link: 127.0.0.1:3000/api/task/getTask
// format of data 
// {
//   "data": [
//       {
//           "taskId": "678a6328fb90a5039a81e7f7",
//           "taskName": "apis",
//           "taskDescription": "Create apis for frontend"
//       },
//       {
//           "taskId": "678a63401461b7d87d8277ec",
//           "taskName": "react pages",
//           "taskDescription": "homepage for frontend"
//       }
//   ]
// }

function TaskSection({ tasks }) {
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
        <h3 className="text-lg font-bold text-black dark:text-white">
          Tasks
        </h3>
        <button className="pl-[28px] py-2 w-[140px] bg-yellow-200 text-black rounded-md hover:bg-yellow-300 transition">
          + Add Tasks
        </button>
      </div>

      {/* Tasks List */}
      <TasksList tasks={tasks} />
    </div>
  );
}

export default TaskSection;
