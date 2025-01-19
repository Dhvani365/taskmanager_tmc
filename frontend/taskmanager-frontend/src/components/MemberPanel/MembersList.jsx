import React from "react";

function MembersList({ members, common_group, onChatSelect, selectedChat }) {
  function openChat(chat) {
    if (onChatSelect) {
      onChatSelect(chat);
    }
  }

  return (
    <ul className="mt-4 px-4 space-y-2">
      <li
        key={common_group}
        className={`flex cursor-pointer items-center px-3 py-2 rounded-md transition ${
          selectedChat?.type === "group" && selectedChat?.name === common_group
            ? "bg-blue-500 text-white"
            : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        onClick={() => openChat({ type: "group", name: common_group })}
      >
        <span className="font-medium">{common_group}</span>
      </li>
      {members.map((member) => (
        <li
          key={member.id}
          className={`flex cursor-pointer items-center px-3 py-2 rounded-md transition ${
            selectedChat?.type === "member" && selectedChat?.name === member.name
              ? "bg-blue-500 text-white"
              : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => openChat({ type: "member", name: member.name })}
        >
          <span className="font-medium">{member.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default MembersList;
