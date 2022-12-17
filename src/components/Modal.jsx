import { data } from "autoprefixer";
import React from "react";
import logo from "../assets/logo.svg";

function EditUser({
  datas,
  update,
  fName,
  lName,
  title,
  pict,
  mail,
  cgFName,
  cgLName,
  cgTitle,
  cgPict,
  cgMail,
}) {
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
              onChange={cgFName}
              value={fName}
              type="text"
              placeholder={"Change Firstname"}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cgLName}
              value={lName}
              type="text"
              placeholder="Change Lastname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cgMail}
              value={mail}
              type="text"
              placeholder="Change Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cgPict}
              value={pict}
              type="text"
              placeholder="Change Picture"
              className="input input-bordered w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal-3"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button
              onClick={update}
              className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CreateUser({
  create,
  fName,
  lName,
  title,
  pict,
  mail,
  cgFName,
  cgLName,
  cgTitle,
  cgPict,
  cgMail,
}) {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="w-3/4 md:w-2/5 flex flex-col items-center rounded-md p-4 gap-4 shadow-md bg-white">
          <h3 className="font-bold text-2xl">Create User</h3>
          <form
            action="submit"
            className="w-full flex flex-col items-center gap-4"
          >
            <select
              onChange={cgTitle}
              value={title}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Title
              </option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Mss</option>
            </select>
            <input
              onChange={cgFName}
              value={fName}
              type="text"
              placeholder="Input Firstname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cgLName}
              value={lName}
              type="text"
              placeholder="Input Lastname"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cgMail}
              value={mail}
              type="text"
              placeholder="Input Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cgPict}
              value={pict}
              type="text"
              placeholder="Input Link Picture"
              className="input input-bordered w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button
              onClick={create}
              className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125"
            >
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

function CreatePost({
  create,
  update,
  own,
  img,
  capt,
  cngOwn,
  tags,
  cngImg,
  cngCapt,
  cngTags,
}) {
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
              onChange={cngCapt}
              value={capt}
              type="text"
              placeholder="Caption"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cngImg}
              value={img}
              type="text"
              placeholder="Image"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              // onChange={cngEmail}
              // value={email}
              type="text"
              placeholder="Likes"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={cngTags}
              value={tags}
              type="text"
              placeholder="Tags"
              className="input input-bordered w-full max-w-xs"
            />
          </form>
          <div className="w-full flex justify-center py-2 gap-3">
            <label
              htmlFor="my-modal"
              className="px-4 py-1 rounded-md font-semibold text-white bg-red-600 hover:brightness-125 cursor-pointer"
            >
              Close
            </label>
            <button
              onClick={create}
              className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 hover:brightness-125"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PreviewImageUser({ id, image }) {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal">
        <label className="modal-box relative" htmlFor="">
          <img key={id} src={image} alt={image} />
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
