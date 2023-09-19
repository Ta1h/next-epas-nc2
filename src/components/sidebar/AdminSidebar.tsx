import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="bg-white text-black h-screen p-5 border-r shadow">
      <Image
          priority
          width="100"
          height="120"
          quality={100}
          src="/logo1.svg"
          alt="Logo"
          className='pt-1'
          />
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">Profile</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
