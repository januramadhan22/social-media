import React from "react";
import logo from "../assets/logo.svg";

function Card({ firstname, lastname, image, tags, caption, likes }) {
  return (
    <div className="w-52 h-60 p-3 flex flex-col justify-between items-center border rounded-md shadow-md">
      <img src={image} alt={image} className="object-contain max-h-32" />
      <div className="w-full">
        <h3 className="font-semibold">
          {firstname} {lastname}
        </h3>
        <p className="text-sm truncate">{caption}</p>
        <p className="text-sm truncate text-blue-400">
          {tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </div>
  );
}

export default Card;
