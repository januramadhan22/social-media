import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/index.css";
import Sidebar from "../components/Sidebar";
import { User } from "../components/Frame";
import { WithRouter } from "../utils/Navigation";
import { useNavigate } from "react-router";

function UserPage(props) {
  const navigate = useNavigate();
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

  const handleUpdate = async ({ e, id }) => {
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
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="ml-16 sm:ml-52 w-full flex flex-col">
        <User
          dataUsers={users}
          onNavigate={(id) => {
            navigate(`/user/${id}/post`);
          }}
          // onEdit={(id)=>handleUpdate(id)}
          onDelete={(id) => handleDelete(id)}
          createUser={(id) => handleCreateUser(id)}
          submit={(id) => handleUpdate(id)}
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
      </div>
    </div>
  );
}

export default WithRouter(UserPage);
