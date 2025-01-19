import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationAction from './SidePanel/NavigationAction';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';

const projects = {
  Project1: {
    project_id: "1",
    project_name: "Project1",
    total_members: 10,
    icon: "",
    groups: {common: "Common Group"},
    members: [
      {
        id: "member1",
        name: "Jiya",
      },
      {
        id: "member2",
        name: "Priya",
      },
      {
        id: "member3",
        name: "Jiya",
      },
    ],
    tasks: [
      {id: "task1", name: "Task1"},
      {id: "task2", name: "Task2"},
      {id: "task3", name: "Task3"}],
  },
  Project2: {
    project_id: "2",
    project_name: "Project2",
    total_members: 20,
    icon: "",
    groups: {common: "Common Group"},
    members: [
      {
        id: "member1",
        name: "Ramesh",
      },
      {
        id: "member2",
        name: "Nitin",
      },
      {
        id: "member3",
        name: "Piyush",
      },
    ],
    tasks: [
      {id: "task1", name: "Task1"},
      {id: "task2", name: "Task2"},
      {id: "task3", name: "Task3"}],
  },
};

function NavigationItem({ id, name, onProjectSelect }) {
  return (
    <button
      onClick={() => onProjectSelect(id)}
      className="text-white w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
    >
      {name}
    </button>
  );
}


function Sidebar({ onProjectSelect }) {
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary py-3 bg-zinc-900">
      <NavigationAction />
      <Separator
        className="h-[2px] bg-white w-20 rounded-md"
      />
      <ScrollArea className="flex-1 w-full">
        {Object.values(projects).map((project) => (
          <div key={project.project_id} className="mb-4">
            <NavigationItem id={project.project_id} name={project.project_name} onProjectSelect={onProjectSelect}/>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

export default Sidebar;
