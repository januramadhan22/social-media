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

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [objSubmit, setObjSubmit] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://dummyapi.io/data/v1/user?created=1`, {
        headers: {
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        const results = res.data.data;
        setUsers(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCreateUser = async () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .post("https://dummyapi.io/data/v1/user/create?created=1", objSubmit, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        alert("Success Create User");
        setObjSubmit({});
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const handleDelete = async (id) => {
    axios
      .delete(`https://dummyapi.io/data/v1/user/${id}?created=1`, {
        headers: {
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        alert("Success Delete User");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  const handleUpdate = async (e, id) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .put(`https://dummyapi.io/data/v1/user/${id}?created=1`, objSubmit, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        alert("Success Edit User");
        setObjSubmit({});
      })
      .catch((err) => {
        alert("Failed Edit User");
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="w-full flex justify-center mt-8">Loading...</div>;
  }

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
        {users.map((user) => (
          <tr key={user.id} id="content" className="w-full py-4 flex border-b">
            <td className="w-1/3 flex items-center justify-center text-center">
              {user.title} {user.firstName} {user.lastName}
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
                htmlFor="my-modal-3"
                className="px-4 py-1 rounded-md bg-blue-500 hover:brightness-90 text-white text-sm font-semibold cursor-pointer"
              >
                Edit
              </label>
              <button
                onClick={() => handleDelete(user.id)}
                className="px-3 py-1 rounded-md bg-red-500 hover:brightness-90 text-white text-sm font-semibold"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <CreateUser
        createUser={() => handleCreateUser()}
        firstName={objSubmit.firstName}
        lastName={objSubmit.lastName}
        title={objSubmit.title}
        picture={objSubmit.picture}
        email={objSubmit.email}
        changeFirstName={(e) => handleChange(e.target.value, "firstName")}
        changeLastName={(e) => handleChange(e.target.value, "lastName")}
        changetitle={(e) => handleChange(e.target.value, "title")}
        changePicture={(e) => handleChange(e.target.value, "picture")}
        changeEmail={(e) => handleChange(e.target.value, "email")}
      />
      <EditUser
        submit={handleUpdate}
        firstName={objSubmit.firstName}
        lastName={objSubmit.lastName}
        title={objSubmit.title}
        picture={objSubmit.picture}
        email={objSubmit.email}
        changeFirstName={(e) => handleChange(e.target.value, "firstName")}
        changeLastName={(e) => handleChange(e.target.value, "lastName")}
        changetitle={(e) => handleChange(e.target.value, "title")}
        changePicture={(e) => handleChange(e.target.value, "picture")}
        changeEmail={(e) => handleChange(e.target.value, "email")}
      />
      <PreviewImageUser id={users.id} image={users.picture} />
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
