import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Members from '@/components/Members';
import Chatbox from '@/components/Chatbox';
import MembersTask from '@/components/TasksList/MembersTask';
import Rightbar from '@/components/Rightbar';

const Homepage = () => {

  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedMemberId, setSelectedMemberId] = useState(null); // State to track selected member
  const [selectedTask, setSelectedTask] = useState(null); // State to track selected task
  const [selectedChat, setSelectedChat] = useState(null); // State to track selected chat

  const handleMemberSelect = (memberId) => {
    setSelectedMemberId(memberId); // Set the selected member ID to display their tasks
    setSelectedChat(null)
    setSelectedTask(null); // Reset task selection when a new member is selected
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task); // Open chatbox when a task is clicked
  };

  const handleChatClose = () => {
    setSelectedTask(null); // Close chatbox and return to tasks list
    setSelectedChat(null)
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-[10%] bg-gray-900">
        <Sidebar onProjectSelect={setSelectedProjectId} />
      </div>

      {/* Members Panel */}
      <div className="w-[280px] bg-gray-100 border-l border-gray-300">
        <Members projectId={selectedProjectId} onChatSelect={setSelectedChat} selectedChat={selectedChat} onMemberSelect={handleMemberSelect}/>
      </div>

      {/* Chatbox */}
      <div className="w-[45%] bg-white border-l border-gray-300">
        {selectedTask && (
          <Chatbox task={selectedTask} onClose={handleChatClose} />
        )}
        {selectedChat && (
          <Chatbox chat={selectedChat} onClose={handleChatClose} />
        )} 
        {selectedMemberId ? (
          <MembersTask
            memberId={selectedMemberId}
            onTaskClick={handleTaskClick}
          />
        ) : (
          <div className="text-center align-middle mt-[250px]">
            Select a member to view tasks or a task to open the chatbox.
          </div>
        )}
      </div>
      <div className="fixed top-0 right-0 h-full w-[25%] bg-gray-100 z-20">
       <Rightbar />
     </div>
    </div>
  );
};

export default Homepage;
