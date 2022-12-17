import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
