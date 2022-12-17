import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/index.css";
import Sidebar from "../components/Sidebar";
import { WithRouter } from "../utils/Navigation";
import { Post } from "../components/Frame";

function PostPage(props) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [objSubmit, setObjSubmit] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const { id } = props.params;
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}/post?created=1`, {
        headers: {
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        const results = res.data.data;
        setPost(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    axios
      .delete(`https://dummyapi.io/data/v1/post/${id}?created=1`, {
        headers: {
          "app-id": process.env.REACT_APP_ID,
        },
      })
      .then((res) => {
        alert("Success Delete Post");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  const handleCreatePost = async () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .post("https://dummyapi.io/data/v1/post/create?created=1", objSubmit, {
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

  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="ml-16 sm:ml-52 w-full flex flex-col">
        <Post
          dataPost={post}
          onDelete={(id) => handleDelete(id)}
          createPost={() => handleCreatePost()}
          // submit={handleUpdate}
          owner={objSubmit.owner}
          image={objSubmit.image}
          caption={objSubmit.text}
          tags={objSubmit.tags}
          changeOwner={(e) => handleChange(e.target.value, "owner")}
          changeImage={(e) => handleChange(e.target.value, "image")}
          changeCaption={(e) => handleChange(e.target.value, "text")}
          changeTags={(e) => handleChange(e.target.value, "tags")}
        />
      </div>
    </div>
  );
}

export default WithRouter(PostPage);
