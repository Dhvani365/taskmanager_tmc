import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Members from '@/components/Members';
import Chatbox from '@/components/Chatbox';

const Homepage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null); // State to manage the selected chat

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-[10%] bg-gray-900">
        <Sidebar onProjectSelect={setSelectedProjectId} />
      </div>

      {/* Members Panel */}
      <div className="w-[280px] bg-gray-100 border-l border-gray-300">
        <Members projectId={selectedProjectId} onChatSelect={setSelectedChat} selectedChat={selectedChat}/>
      </div>

      {/* Chatbox */}
      <div className="w-[70%] bg-white border-l border-gray-300">
        {selectedChat ? (
            <Chatbox chat={selectedChat} />
          ) : (
            <div className="text-center align-middle mt-[250px]">
              Select a chat to open the relevant chatbox.
            </div>
          )}
        </div>
    </div>
  );
};

export default Homepage;
