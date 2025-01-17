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

function TaskSection() {
  return (
    <div className="mt-2">
      <Separator className="h-[2px] bg-black w-full rounded-md mt-2 mb-2" />

      <SearchComponent
        data={[
          {
            label: "Search Tasks",
            type: "tasks",
          },
        ]}
      />

      <div className="flex items-center justify-between mt-4 px-4">
        <h3 className="text-lg font-bold text-black dark:text-white">Common Group</h3>
        <button className="px-3 py-1 bg-gold text-black rounded-md hover:bg-gold-dark transition">
          Add
        </button>
      </div>

      {/* Render TasksList */}
      <TasksList tasks={tasks} />
    </div>
  );
}

export default TaskSection;
