import React from 'react';
import MemberSidebar from './MemberPanel/MemberSidebar';
function Members() {

  return (
    <div>
      <div className='h-full'>
        <div className='hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0'>
            <MemberSidebar/>
        </div>
      </div>
    </div>
  )
}

export default Members
