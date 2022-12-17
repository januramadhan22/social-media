import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
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
import Loading from "./Loading";
import { useNavigate } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [total, setTotal] = useState(1);
  const [limit, setLimit] = useState(1);
  const totalPage = Math.ceil(total / limit);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://dummyapi.io/data/v1/post?created=1`, {
        headers: {
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        const results = res.data;

        // const nextPage = page + 1;
        // const prevPage = page - 1;
        // // const currentPage = page ? nextPage : prevPage;
        // const totalPage = Math.ceil(results.total / limit);
        setPosts(results.data);
        setTotal(results.total);
        setLimit(results.limit);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const indexOfLastPage = page * limit;
  const indexOfFirstPage = indexOfLastPage - limit;
  const currentPage = posts.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (event) => {
    const newOffset = (event.selected * limit) % total;
    setPage(newOffset);
    console.log(newOffset);
  };

  // const handlePage = (event) => {
  //   const newOffset = (event.selected * limit) % total;
  //   setItemOffset(newOffset);
  //   console.log(newOffset);
  // };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6  items-center justify-center gap-2 md:gap-8  mb-8">
          {loading
            ? skeleton.map((item) => <Loading key={item} />)
            : currentPage.map((data) => (
                <Card
                  key={data.id}
                  image={data.image}
                  tags={data.tags}
                  caption={data.text}
                  likes={data.likes}
                  firstname={data.owner.firstName}
                  lastname={data.owner.lastName}
                />
              ))}
        </div>
        <ReactPaginate
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel="Previous"
          previousLinkClassName="p-1 font-semibold hover:text-blue-500"
          nextLabel="Next"
          nextLinkClassName="p-1 font-semibold hover:text-blue-500"
          onPageChange={paginate}
          pageLinkClassName="p-1 font-semibold hover:text-blue-500"
          containerClassName="mb-8 flex justify-center items-center gap-4"
          pageCount={Math.ceil(total / limit)}
          activeClassName="p-0.5 bg-blue-500 rounded-full text-white"
        />
      </div>
    </>
  );
}

function User({
  dataUsers,
  onNavigate,
  onDelete,
  createUser,
  submit,
  firstName,
  lastName,
  title,
  picture,
  email,
  changeFirstName,
  changeLastName,
  changeTitle,
  changePicture,
  changeEmail,
}) {
  const [id, setId] = useState("");
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
      <table className="w-full md:w-8/12 border shadow-md mb-12">
        <tr id="header" className="w-full flex  border-b">
          <th className="w-1/3">Name</th>
          <th className="w-1/3 border-x">Picture</th>
          <th className="w-1/3">Action</th>
        </tr>
        {dataUsers.map((user) => (
          <tr key={user.id} id="content" className="w-full py-4 flex border-b">
            <td className="w-1/3 flex items-center justify-center text-center">
              <button onClick={() => onNavigate(user.id)}>
                {user.title} {user.firstName} {user.lastName}
              </button>
            </td>
            <td className="w-1/3 border-x flex justify-center items-center">
              <label htmlFor="my-modal-4" className="cursor-pointer">
                <img
                  src={user.picture}
                  alt={user.firstName}
                  className="w-20 h-20"
                />
              </label>
            </td>
            <td className="w-1/3 flex flex-col sm:flex-row justify-center items-center gap-2">
              <label
                onClick={() => submit(user.id)}
                htmlFor="my-modal-3"
                className="px-4 py-1 rounded-md bg-blue-500 hover:brightness-90 text-white text-sm font-semibold cursor-pointer"
              >
                Edit
              </label>
              <button
                onClick={() => onDelete(user.id)}
                className="px-3 py-1 rounded-md bg-red-500 hover:brightness-90 text-white text-sm font-semibold"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <CreateUser
        create={() => createUser()}
        fName={firstName}
        lName={lastName}
        title={title}
        pict={picture}
        mail={email}
        cgFName={changeFirstName}
        cgLName={changeLastName}
        cgTitle={changeTitle}
        cgPict={changePicture}
        cgMail={changeEmail}
      />
      <EditUser
        datas={dataUsers}
        update={submit}
        fName={firstName}
        lName={lastName}
        title={title}
        pict={picture}
        mail={email}
        cgFName={changeFirstName}
        cgLName={changeLastName}
        cgTitle={changeTitle}
        cgPict={changePicture}
        cgMail={changeEmail}
      />
      <PreviewImageUser id={dataUsers.id} image={dataUsers.picture} />
    </div>
  );
}

function Post({
  dataPost,
  onDelete,
  createPost,
  submit,
  owner,
  caption,
  image,
  tags,
  changeOwner,
  changeImage,
  changeCaption,
  changeTags,
}) {
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
      <table className="w-full md:w-11/12 border shadow-md mb-12">
        <tr id="header" className="w-full flex  border-b">
          <th className="w-1/3 border-r">Caption</th>
          <th className="w-1/3 border-r">Tags</th>
          <th className="w-1/3 border-r">Image</th>
          <th className="w-1/3 border-r">User</th>
          <th className="w-1/3">Action</th>
        </tr>
        {dataPost.length !== 0 ? (
          dataPost.map((item) => (
            <tr
              key={item.id}
              id="content"
              className="w-full py-4 px-2 flex border-b"
            >
              <td className="w-1/5 flex items-center justify-center border-r text-left text-clip overflow-hidden">
                {item.text}
              </td>
              <td className="w-1/5 flex items-center justify-center border-r text-center text-blue-400">
                {item.tags.map((tag) => `#${tag} `)}
              </td>
              <td className="w-1/5 border-r flex justify-center items-center cursor-pointer">
                <label htmlFor="my-modal-4" className="cursor-pointer">
                  <img src={item.image} alt="" className="w-20 h-20" />
                </label>
              </td>
              <td
                key={item.owner.id}
                className="w-1/5 flex items-center justify-center border-r"
              >
                {item.owner.title} {item.owner.firstName} {item.owner.lastName}
              </td>
              <td className="w-1/5 flex flex-col lg:flex-row justify-center items-center gap-2">
                <label
                  htmlFor="my-modal-3"
                  className="px-2 md:px-4 py-1 rounded-md bg-blue-500 hover:brightness-90 text-white text-sm font-semibold cursor-pointer"
                >
                  Edit
                </label>
                <button
                  onClick={() => onDelete(item.id)}
                  className="px-2 md:px-3 py-1 rounded-md bg-red-500 hover:brightness-90 text-white text-sm font-semibold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr id="content" className="w-full py-4 px-2 flex border-b">
            <td className="w-1/5 flex items-center justify-center border-r text-left text-clip overflow-hidden">
              Create Post First
            </td>
            <td className="w-1/5 flex items-center justify-center border-r text-center text-blue-400">
              Create Post First
            </td>
            <td className="w-1/5 border-r flex justify-center items-center cursor-pointer">
              <label htmlFor="my-modal-4" className="cursor-pointer">
                Create Post First
              </label>
            </td>
            <td className="w-1/5 flex items-center justify-center border-r">
              Create Post First
            </td>
            <td className="w-1/5 flex flex-col sm:flex-row justify-center items-center gap-2">
              Create Post First
            </td>
          </tr>
        )}
      </table>
      <EditPost />
      <CreatePost
        create={createPost}
        update={submit}
        own={owner}
        img={image}
        capt={caption}
        tags={tags}
        cngOwn={changeOwner}
        cngImg={changeImage}
        cngCapt={changeCaption}
        cngTags={changeTags}
      />
      <PreviewImagePost />
    </div>
  );
}

export { Home, User, Post };
