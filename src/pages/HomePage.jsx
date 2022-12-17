import "../styles/index.css";
import Sidebar from "../components/Sidebar";
import { Home, User, Post } from "../components/Frame";
import { useEffect, useState } from "react";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";
import { Navigate } from "react-router";

function HomePage() {
  // const [openHome, setOpenHome] = useState(false);
  // const [openUser, setOpenUser] = useState(false);
  // const [openPost, setOpenPost] = useState(false);

  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="ml-16 sm:ml-52 w-full flex flex-col">
        <Home />
      </div>
    </div>
  );
}

export default WithRouter(HomePage);
