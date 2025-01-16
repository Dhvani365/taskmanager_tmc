import React from 'react';
import GroupHeading from './GroupHeading';
import GroupSection from './GroupSection';
import TaskSection from './TaskSection';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const group = {
    "name":"Project 1",
    "members": "10",
    "icon": "./image.png"
};
function MemberSidebar() {
    // fetch members here
    // const role = server?.members.find((member)=>member.profileId===profile.id)?.role;
  return (
    <div className='flex flex-col h-full text-primary w-full dark_bg-[#2B2D31] bg-[#F2F3F5]'>
      <GroupHeading
        group={group}
      />
      <ScrollArea className="flex-1 px-3">
        {/* General Chat Section */}        
        <GroupSection/>
        {/* Tasks Section */}        
        <TaskSection/>
      </ScrollArea>
    </div>
  )
}

export default MemberSidebar
