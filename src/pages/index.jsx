import "../styles/index.css";
import Sidebar from "../components/Sidebar";
import { Home, User, Post } from "../components/Frame";
import { useState } from "react";

function App() {
  const [openHome, setOpenHome] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openPost, setOpenPost] = useState(false);

  return (
    <div className="w-full min-h-screen flex">
      <Sidebar
        handleOpenHome={() => {
          setOpenHome(!openHome);
          setOpenUser(false);
          setOpenPost(false);
        }}
        handleOpenUser={() => {
          setOpenUser(!openUser);
          setOpenHome(false);
          setOpenPost(false);
        }}
        handleOpenPost={() => {
          setOpenPost(!openPost);
          setOpenHome(false);
          setOpenUser(false);
        }}
      />
      <div className="w-full flex flex-col">
        {openHome ? <Home /> : ""}
        {openUser ? <User /> : ""}
        {openPost ? <Post /> : ""}
      </div>
    </div>
  );
}

export default App;
