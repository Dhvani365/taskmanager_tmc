import { useState } from "react";
import Calendar from "./RightPanel/CalendarWidget/Calendar";
import TaskStats from "./RightPanel/TaskStats";

const Rightbar = () => {
  const [activeTab, setActiveTab] = useState("calendar"); // Default active tab

  return (
    <div className="h-full w-[360px] bg-[#011627] text-[#FDFFFC] p-4 flex flex-col">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "calendar" ? "bg-[#F6AE2D] text-[#011627]" : "bg-[#011627] text-[#FDFFFC] border border-[#F6AE2D]"
          }`}
          onClick={() => setActiveTab("calendar")}
        >
          Calendar
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "taskStats" ? "bg-[#F6AE2D] text-[#011627]" : "bg-[#011627] text-[#FDFFFC] border border-[#F6AE2D]"
          }`}
          onClick={() => setActiveTab("taskStats")}
        >
          Task Stats
        </button>
        
      </div>
      <div className="border-t border-[#F6AE2D] "></div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "calendar" ? (
          <Calendar /> // Calendar component as one tab
        ) : (
          <TaskStats /> // TaskStats component as another tab
        )}
      </div>
    </div>
  );
};

export default Rightbar;