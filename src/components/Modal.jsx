import React from "react";
import logo from "../assets/logo.svg";

function EditUser() {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="w-3/4 md:w-2/5 flex flex-col items-center rounded-md p-4 gap-4 shadow-md bg-white">
          <h3 className="font-bold text-2xl">Edit User</h3>
          <form action="" className="w-full flex flex-col items-center gap-4">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Title
              </option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Mss</option>
            </select>
            <input
              type="text"
              placeholder="Firstname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal-3"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CreateUser() {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="w-3/4 md:w-2/5 flex flex-col items-center rounded-md p-4 gap-4 shadow-md bg-white">
          <h3 className="font-bold text-2xl">Create User</h3>
          <form action="" className="w-full flex flex-col items-center gap-4">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Title
              </option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Mss</option>
            </select>
            <input
              type="text"
              placeholder="Firstname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function EditPost() {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="w-3/4 md:w-2/5 flex flex-col items-center rounded-md p-4 gap-4 shadow-md bg-white">
          <h3 className="font-bold text-2xl">Edit Post</h3>
          <form action="" className="w-full flex flex-col items-center gap-4">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Title
              </option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Mss</option>
            </select>
            <input
              type="text"
              placeholder="Firstname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal-3"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CreatePost() {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="w-3/4 md:w-2/5 flex flex-col items-center rounded-md p-4 gap-4 shadow-md bg-white">
          <h3 className="font-bold text-2xl">Create Post</h3>
          <form action="" className="w-full flex flex-col items-center gap-4">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Title
              </option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Mss</option>
            </select>
            <input
              type="text"
              placeholder="Firstname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PreviewImageUser() {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal">
        <label className="modal-box relative" htmlFor="">
          <img src={logo} alt="" />
        </label>
      </label>
    </>
  );
}

function PreviewImagePost() {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal">
        <label className="modal-box relative" htmlFor="">
          <img src={logo} alt="" />
        </label>
      </label>
    </>
  );
}

export {
  EditUser,
  CreateUser,
  EditPost,
  CreatePost,
  PreviewImageUser,
  PreviewImagePost,
};
