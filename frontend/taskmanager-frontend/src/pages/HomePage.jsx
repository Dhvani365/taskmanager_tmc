import React from 'react';
import Logo from '../assets/images/Logo.png';

const Homepage = () => {
  return (
    <div className="flex h-screen bg-[#fef7eb]">
      {/* Sidebar */}
      <div className="w-1/6 bg-[#ffa500] p-4 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="w-full h-20 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <button className="flex items-center space-x-2 w-full p-2 bg-white rounded-full">
              <span className="w-4 h-4 rounded-full bg-[#ffa500]" />
              <span className="font-semibold">+ Add</span>
            </button>
          </div>
          {/* General Chat Section */}
          <div>
            <div className="flex justify-between items-center p-2 text-white">
              <span>GENERAL CHAT</span>
              <button className="p-2 bg-white rounded-full">+</button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-white"></span>
                <input
                  className="w-full p-1 bg-white rounded-lg"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* Tasks Section */}
          <div>
            <div className="flex justify-between items-center p-2 text-white">
              <span>TASKS</span>
              <button className="p-2 bg-white rounded-full">+</button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-white"></span>
                <input
                  className="w-full p-1 bg-white rounded-lg"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 pb-2 mb-4">
          <div className="flex space-x-4">
            <span>Members</span>
            <span>Tasks</span>
            <span>All</span>
            <span>Pending</span>
            <span>Blocked</span>
          </div>
          <div className="flex space-x-4 text-[#ffa500]">
            <button>Add Member</button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex h-full">
          <div className="w-3/4 bg-white rounded-lg p-4">
            {/* Chat and Tasks list would go here */}
          </div>
          <div className="w-1/4 pl-4">
            <div className="bg-white rounded-lg p-4">
              <h2 className="font-bold">Notifications</h2>
              {/* Notifications list would go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
