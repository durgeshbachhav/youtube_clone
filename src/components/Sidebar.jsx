// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { RiPlayList2Fill } from 'react-icons/ri'
import { FaPager } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="bg-black text-white  pt-2 w-1/6 px-4 h-screen mt-16">
      <Link
        to="/"
        className="flex gap-2  items-center mx-auto px-4 py-2 focus:bg-gray-700  hover:bg-gray-500 rounded-lg"
        
      >
        <AiFillHome size={25} />
        Home
      </Link>
      <Link
        to="/videos"
        className="flex gap-2 focus:bg-gray-700  items-center mx-auto px-4 py-2 hover:bg-gray-500 rounded-lg mt-2"
      >
        <BiSolidVideo size={25} /> Video
      </Link>
      <Link
        to="/playlist"
        className="flex gap-2 focus:bg-gray-700 items-center mx-auto px-4 py-2 hover:bg-gray-500 rounded-lg mt-2"
      >
        <RiPlayList2Fill size={25} /> PlayList
      </Link>
      <hr className="px-2  mt-2"/>
      <Link
        to="/channel"
        className="flex gap-2 focus:bg-gray-700  items-center mx-auto px-4 py-2 hover:bg-gray-500 rounded-lg mt-2"
      >
        <FaPager size={25} /> Your Channel
      </Link>
      <div className="mt-60">
      <p className="">@2023 designed by durgesh ❣️</p>
      </div>
    </div>
  );
};

export default Sidebar;
