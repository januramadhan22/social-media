import React from "react";
import { TiHome, TiSocialInstagram } from "react-icons/ti";
import { RiUser3Fill } from "react-icons/ri";
import { MdImage } from "react-icons/md";

function Sidebar({ handleOpenHome, handleOpenUser, handleOpenPost, status }) {
  return (
    <div className="sidebar w-56 min-h-screen border-r flex flex-col gap-4 bg-white">
      <header className="w-full flex flex-col px-6">
        <h2 className="w-full text-left text-lg font-bold">Social Media</h2>
        <TiSocialInstagram id="icon" viewBox="0 0 24 24" className="w-8 h-8" />
      </header>
      <ul className="w-full flex flex-col gap-2 px-2">
        <button
          onClick={handleOpenHome}
          className="w-full flex gap-2 justify-start items-center px-4 py-2 font-semibold rounded-full hover:bg-gray-100 focus:bg-gray-100"
        >
          <TiHome id="home-btn" viewBox="0 0 24 24" className="w-6 h-6" />
          <p>Home</p>
        </button>
        <button
          onClick={handleOpenUser}
          className="w-full flex gap-2 justify-start items-center px-4 py-2 font-semibold rounded-full hover:bg-gray-100 focus:bg-gray-100"
        >
          <RiUser3Fill id="user-btn" viewBox="0 0 24 24" className="w-6 h-6" />
          <p>User</p>
        </button>
        <button
          onClick={handleOpenPost}
          className="w-full flex gap-2 justify-start items-center px-4 py-2 font-semibold rounded-full hover:bg-gray-100 focus:bg-gray-100"
        >
          <MdImage id="post-btn" viewBox="0 0 24 24" className="w-6 h-6" />
          <p>Post</p>
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
