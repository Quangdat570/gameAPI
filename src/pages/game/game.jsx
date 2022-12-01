import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGames } from "../../store/feautes/cart/List.slice";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cart from "../commentCart/Cart";
import { List } from "../Gamelist/GameList";
// import { Category } from "../../component/categori/categori";


const Game = () => {
    const dispatch = useDispatch();
    const { data: games } = useSelector(selectGames);

    return (
        <div className="d-flex">
            
            <List/>
            {/* <Category/> */}
            



        </div>
    );
};

export default Game;