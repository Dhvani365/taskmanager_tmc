import React, { useState, useEffect, useRef } from "react";
import { MoreVertical, VolumeX, Users, LogOut, Trash, Download } from "lucide-react";

function ChatHeader({ data }) {
  const { chatId, name, type, image } = data || {};
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu container

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!data || !name) {
    return <p>Chat Not Found!!</p>;
  }

  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 relative">
      <div className="flex-1">
        {type === "member" && (
          <div className="w-full h-5 text-zinc-500 dark:text-zinc-400">
            <span className="mr-2 font-semibold text-md text-black dark:text-white">Member</span>
            |
            <span className="ml-6 font-semibold text-md text-black dark:text-white">{name}</span>
          </div>
        )}
        {type === "task" && (
          <div className="w-full h-5 text-zinc-500 dark:text-zinc-400">
            <span className="mr-2 font-semibold text-md text-black dark:text-white">Task</span>
            |
            <span className="ml-6 font-semibold text-md text-black dark:text-white">{name}</span>
          </div>
        )}
        {type === "group" && (
          <div className="w-full h-5 text-zinc-500 dark:text-zinc-400">
            <span className="mr-2 font-semibold text-md text-black dark:text-white">Group</span>
            |
            <span className="ml-6 font-semibold text-md text-black dark:text-white">{name}</span>
          </div>
        )}
      </div>

      <button
        onClick={toggleMenu}
        className="ml-auto text-zinc-500 hover:text-black dark:hover:text-white"
        aria-label="Menu"
      >
        <MoreVertical size={20} />
      </button>

      {menuOpen && (
        <div
          ref={menuRef} // Attach ref to the menu
          className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#313338] border border-neutral-200 dark:border-neutral-800 shadow-md rounded-md z-10"
        >
          <ul>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#444654] cursor-pointer"
              onClick={() => alert("Muted Chat")}
            >
              <VolumeX size={16} className="mr-2 text-zinc-500 dark:text-zinc-400" />
              Mute Chat
            </li>
            {type === "group" && (
              <>
                <li
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#444654] cursor-pointer"
                  onClick={() => alert("View Members")}
                >
                  <Users size={16} className="mr-2 text-zinc-500 dark:text-zinc-400" />
                  View Members
                </li>
                <li
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#444654] cursor-pointer"
                  onClick={() => alert("Leave Group")}
                >
                  <LogOut size={16} className="mr-2 text-zinc-500 dark:text-zinc-400" />
                  Leave Group
                </li>
              </>
            )}
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#444654] cursor-pointer"
              onClick={() => alert("Delete Chat")}
            >
              <Trash size={16} className="mr-2 text-zinc-500 dark:text-red-400" />
              Delete Chat
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#444654] cursor-pointer"
              onClick={() => alert("Export Chat")}
            >
              <Download size={16} className="mr-2 text-zinc-500 dark:text-zinc-400" />
              Export Chat
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ChatHeader;
