import React from 'react';
import Logo from '../assets/images/Logo.png';
import Sidebar from '../components/Sidebar';
import Members from '@/components/Members';
import { useState } from 'react';
import Chatbox from '@/components/Chatbox';

const Homepage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  return (
    <div className='h-full'>
      <div className="hidden md:flex h-full w-[72px] z-30 flex-co fixed inset-y-0">
        {/* Sidebar */}
        <Sidebar onProjectSelect={setSelectedProjectId} />
        <Members projectId={selectedProjectId}/>
        <Chatbox/>
      </div>
    </div>       
  );
};

export default Homepage;
