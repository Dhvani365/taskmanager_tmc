import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';


// Change Content of DropDownMenuItem as per the users role
// For owner-Add Member, Manage Member, Delete Member, Complete Project
// For manager-Add Member, Manage Members
// For Members-View Members

function SectionHeading({ project }) { // Correctly destructure the project prop
  return (
    <div className='mt-[30px]'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="focus:outline-none"
          asChild
        >
          <button
            className="w-full text-black text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
          >
            {project.project_name} {/* Access project.name correctly */}
            <ChevronDown className="h-5 w-5 ml-auto" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"
        >
          <DropdownMenuItem
            className="text-yellow-600 dark:text--indigo-400 px-3 py-2 text-sm cursor-pointer"
          >
            + Add People
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SectionHeading;
