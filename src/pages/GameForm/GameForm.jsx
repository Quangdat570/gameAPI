import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,NavLink } from "react-router-dom";

export const GameForm = ({ game }) => {
  return (
    <div className="cart col-3 text-center mt-5">
      <div className="todo-id">{game.id}</div>
      <a href={game.freetogame_profile_url}>{game.title}</a>
      <Link as={Link} to={`/info/${game.id}`} ><img src={game.thumbnail} alt="" /></Link>
      <div>{game.platform}</div>
      <div>{game.publisher}</div>
      <div>{game.developer}</div>
    </div>
  );
};
