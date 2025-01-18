import React from 'react';
import MemberSidebar from './MemberPanel/MemberSidebar';

function Members({ projectId }) {

  return (
    <div>
      <div className='h-full'>
        <div className='hidden md:flex h-full w-[300px] z-20 flex-col fixed inset-y-0'>
            <MemberSidebar projectId={projectId}/>
        </div>
      </div>
    </div>
  )
}

export default Members
