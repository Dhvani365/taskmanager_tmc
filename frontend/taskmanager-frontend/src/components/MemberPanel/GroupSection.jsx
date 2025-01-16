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

function GroupSection() {
  return (
    <div className="mt-4">
      <Separator className="h-[2px] bg-gray-400 w-full rounded-md mt-2 mb-2" />

      <SearchComponent
        data={[
          {
            label: "Search Members",
            type: "members",
          },
        ]}
      />

      <div className="flex items-center justify-between mt-4 px-4">
        <h3 className="text-lg font-bold text-black dark:text-white">Common Group</h3>
        <button className="px-3 py-1 bg-gold text-black rounded-md hover:bg-gold-dark transition">
          Add
        </button>
      </div>

      {/* Render MembersList */}
      <MembersList members={members} />
    </div>
  );
}

export default GroupSection;
