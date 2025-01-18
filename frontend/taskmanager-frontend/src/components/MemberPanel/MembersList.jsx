import React from "react";

function MembersList({ members, common_group }) {
  console.log(members)
  return (
    <ul className="mt-4 px-4 space-y-2">
      <li
          key={common_group}
          className="flex cursor-pointer items-center px-3 py-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <span className="text-black dark:text-white font-medium">
            {common_group}
          </span>
        </li>
      {members.map((member) => (
        <li
          key={member.id}
          className="flex cursor-pointer items-center px-3 py-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <span className="text-black dark:text-white font-medium">
            {member.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default MembersList;
