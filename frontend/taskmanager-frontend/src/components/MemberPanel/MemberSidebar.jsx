import React from 'react';
import SectionHeading from './SectionHeading';
import GroupSection from './GroupSection';
import TaskSection from './TaskSection';
import { ScrollArea } from '../ui/scroll-area';

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
        name: "Riya",
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

// const project = {
//     "name":"Project 1",
//     "members": "10",
//     "icon": "./image.png"
// };

function MemberSidebar({projectId, onChatSelect,selectedChat,onMemberSelect}) {
    // Fetch projects details from projectId
    // fetch members here
    // const role = server?.members.find((member)=>member.profileId===profile.id)?.role;
    if (!projectId) {
      return (
      <>
        <div className="flex flex-col h-full text-primary w-[250px] text-center mt-5 dark_bg-[#2B2D31] bg-[#F2F3F5]">Select a project to view details.</div>;
      </>
      )
    }
  
    const project = Object.values(projects).find((p) => p.project_id === projectId);
  
    return (
      <div className="flex flex-col h-full text-primary w-[250px] dark_bg-[#2B2D31] bg-[#F2F3F5]">
        {/* Project Header */}
        <SectionHeading project={project} />
  
        {/* Scrollable Area */}
        <ScrollArea className="flex-1 px-3">
          {/* Group Section */}
          <GroupSection groups={project.groups} members={project.members} onChatSelect={onChatSelect} selectedChat={selectedChat} onMemberSelect={onMemberSelect}/>
          
          {/* Task Section */}
          <TaskSection tasks={project.tasks} onChatSelect={onChatSelect} selectedChat={selectedChat}/>
        </ScrollArea>
      </div>
    );
}

export default MemberSidebar
