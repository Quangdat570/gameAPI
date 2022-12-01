import { useDispatch, useSelector } from "react-redux";
import { selectGames } from "../../store/feautes/cart/List.slice";
import { GameForm } from "../GameForm/GameForm";


export const List = ( ) => {
    const dispatch = useDispatch();
    const { data: games } = useSelector(selectGames);

    const list = games.map((game) => <GameForm key={game.id} game={game}/> )
    return <div className="User-list d-flex flex-wrap mt-5">{list}</div>
};