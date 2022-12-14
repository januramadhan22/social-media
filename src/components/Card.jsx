import React from "react";
import logo from "../assets/logo.svg";

function Card() {
  return (
    <div className="w-52 h-60 p-3 flex flex-col justify-between items-center border rounded-md shadow-md">
      <img src={logo} alt="" className="w-48" />
      <div className="w-full">
        <h3 className="font-semibold">Handoko</h3>
        <p className="text-sm">Ini postingan</p>
        <p className="text-sm text-blue-400">#tag</p>
      </div>
    </div>
  );
}

export default Card;
