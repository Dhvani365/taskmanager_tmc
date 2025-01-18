import React from "react";
import SearchComponent from "./SearchComponent";
import { Separator } from "../ui/separator";
import MembersList from "./MembersList";

const members = [
  {
    id: "member1",
    name: "Jiya",
  },
  {
    id: "member2",
    name: "Priya",
  },
];

function GroupSection({ groups, members }) {
  return (
    <div className="mt-4 w-100">
      <Separator className="h-[2px] bg-gray-400 w-full rounded-md mt-2 mb-2" />

      {/* Search Component */}
      <SearchComponent
        data={[
          {
            label: "Search Members",
            type: "members",
          },
        ]}
      />

      {/* Group Section Header */}
      <div className="flex items-center justify-between mt-4 px-4">
        <h3 className="text-lg font-bold text-black dark:text-white">
          Groups 
        </h3>
        <button className="px-3 py-2 w-[140px] ml-[0px] bg-yellow-200 text-black rounded-md hover:bg-yellow-300 transition">
          + Add Members
        </button>
      </div>

      {/* Members List */}
      <MembersList members={members} common_group={groups.common}/>
    </div>
  );
}

export default GroupSection;

