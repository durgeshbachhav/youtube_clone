import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import {FaBars } from 'react-icons/fa'
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { channelData } = useContext(userContext);
  const { snippet } = channelData;
  return (
    // 
    <div className="flex justify-between px-10 py-4 w-20 bg-black navbar">
        <div className="flex items-center gap-2">
        <FaBars color="red" size={30}/>
          <h2 className="font-bold text-2xl text-white">
            
            Youtube</h2>
        </div>
        <SearchBar />
        <Link to={'/channel'}>
        <img
          className="rounded-full w-8 border-2"
          src={snippet?.thumbnails?.high?.url}
          alt="profile image"
        />
        </Link>
    </div>
    
  );
};

export default Navbar;
