import React from "react";
import Card from "./Card";
import {
  CreatePost,
  CreateUser,
  EditPost,
  EditUser,
  PreviewImagePost,
  PreviewImageUser,
} from "./Modal";
import { HiOutlineSearch } from "react-icons/hi";
import logo from "../assets/logo.svg";

function Home() {
  return (
    <>
      <div id="home-tab" className="w-full flex flex-col gap-4 px-8">
        <form className="min-w-fit max-w-sm mt-5 flex items-center px-3 py-0.5 border rounded-md gap-2">
          <input
            id="search-field"
            type="text"
            placeholder="Search . . ."
            className="w-full px-1 py-1 text-sm focus:outline-none"
          />
          <button id="search-btn" className="opacity-70 hover:opacity-100">
            <HiOutlineSearch viewBox="0 0 24 24" className="w-6 h-6" />
          </button>
        </form>
        <Card />
      </div>
    </>
  );
}

function User() {
  return (
    <div
      id="user-tab"
      className="w-full flex flex-col items-center mt-8 gap-4 px-8"
    >
      <label
        htmlFor="my-modal"
        className="px-10 py-2 border rounded-md bg-green-600 hover:brightness-125 text-white font-semibold cursor-pointer"
      >
        Create Account
      </label>
      <table className="w-full md:w-8/12 border shadow-md">
        <tr id="header" className="w-full flex  border-b">
          <th className="w-1/3">Name</th>
          <th className="w-1/3 border-x">Picture</th>
          <th className="w-1/3">Action</th>
        </tr>
        <tr id="content" className="w-full py-4 flex border-b">
          <td className="w-1/3 flex items-center justify-center">Handoko</td>
          <td className="w-1/3 border-x flex justify-center items-center">
            <label htmlFor="my-modal-4" className="cursor-pointer">
              <img src={logo} alt="" className="w-20 h-20" />
            </label>
          </td>
          <td className="w-1/3 flex flex-col sm:flex-row justify-center items-center gap-2">
            <label
              htmlFor="my-modal-3"
              className="px-4 py-1 rounded-md bg-blue-500 hover:brightness-90 text-white text-sm font-semibold cursor-pointer"
            >
              Edit
            </label>
            <button className="px-3 py-1 rounded-md bg-red-500 hover:brightness-90 text-white text-sm font-semibold">
              Delete
            </button>
          </td>
        </tr>
      </table>
      <CreateUser />
      <EditUser />
      <PreviewImageUser />
    </div>
  );
}

function Post() {
  return (
    <div
      id="user-tab"
      className="w-full flex flex-col items-center mt-8 gap-4 px-4 md:px-8"
    >
      <label
        htmlFor="my-modal"
        className="px-10 py-2 border rounded-md bg-green-600 hover:brightness-125 text-white font-semibold cursor-pointer"
      >
        Create Post
      </label>
      <table className="w-full md:w-10/12 border shadow-md">
        <tr id="header" className="w-full flex  border-b">
          <th className="w-1/3 border-r">Caption</th>
          <th className="w-1/3 border-r">Tags</th>
          <th className="w-1/3 border-r">Image</th>
          <th className="w-1/3 border-r">User</th>
          <th className="w-1/3">Action</th>
        </tr>
        <tr id="content" className="w-full py-4 flex border-b">
          <td className="w-1/5 flex items-center justify-center border-r">
            Halo dek!!!
          </td>
          <td className="w-1/5 flex items-center justify-center border-r">
            Handoko
          </td>
          <td className="w-1/5 border-r flex justify-center items-center cursor-pointer">
            <label htmlFor="my-modal-4" className="cursor-pointer">
              <img src={logo} alt="" className="w-20 h-20" />
            </label>
          </td>
          <td className="w-1/5 flex items-center justify-center border-r">
            Handoko
          </td>
          <td className="w-1/5 flex flex-col sm:flex-row justify-center items-center gap-2">
            <label
              htmlFor="my-modal-3"
              className="px-4 py-1 rounded-md bg-blue-500 hover:brightness-90 text-white text-sm font-semibold cursor-pointer"
            >
              Edit
            </label>
            <button className="px-3 py-1 rounded-md bg-red-500 hover:brightness-90 text-white text-sm font-semibold">
              Delete
            </button>
          </td>
        </tr>
      </table>
      <EditPost />
      <CreatePost />
      <PreviewImagePost />
    </div>
  );
}

export { Home, User, Post };
