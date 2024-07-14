import React from 'react';
import { Link } from 'react-router-dom';
import { Property4uIcon } from '@/SVGs/SVGsExport';

const SidebarIcon = ({ sidebar, className }) => {
  return (
    <Link to='/' className={`${className} flex`}>
      {sidebar ? (
        <div className='w-full flex items-center gap-3'>
          <Property4uIcon />
          <div className='flex flex-col'>
            <h4 className='text-sm'>Property4U.ng</h4>
            <small className='text-[10px]'>Property Manager</small>
          </div>
        </div>
      ) : (
        <div className='w-full'>
          <Property4uIcon />
        </div>
      )}
    </Link>
  );
};

export default SidebarIcon;
