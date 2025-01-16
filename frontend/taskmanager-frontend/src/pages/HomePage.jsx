import React from 'react';
import Logo from '../assets/images/Logo.png';
import Sidebar from '../components/Sidebar';
import Members from '@/components/Members';

const Homepage = () => {
  return (
    <div className='h-full'>
      <div className="hidden md:flex h-full w-[72px] z-30 flex-co fixed inset-y-0">
        {/* Sidebar */}
        <Sidebar/>
        <Members/>
      </div>
    </div>       
  );
};

export default Homepage;
