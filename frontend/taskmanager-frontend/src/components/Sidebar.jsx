import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationAction from './SidePanel/NavigationAction';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';

const projects = {
  Project1: {
    project_id: "1",
    project_name: "Project1",
  },
  Project2: {
    project_id: "2",
    project_name: "Project2",
  },
};

function NavigationItem({ id, name }) {
  return (
    <button
      onClick={() => console.log(`Navigating to project ${id}`)}
      className="text-white w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
    >
      {name}
    </button>
  );
}

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-[300px] py-3 bg-zinc-900">
      <NavigationAction />
      <Separator
        className="h-[2px] bg-white w-20 rounded-md"
      />
      <ScrollArea className="flex-1 w-full">
        {Object.values(projects).map((project) => (
          <div key={project.project_id} className="mb-4 ml-5">
            <NavigationItem id={project.project_id} name={project.project_name} />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

export default Sidebar;
