import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "./categori.slice";



export const Category = ({Category} ) => {
    const dispatch = useDispatch();
    const { data: Categorys } = useSelector(categoriesSelector);

    const listcat = Categorys.map((Category) => {(
        <div className="">{Category.genre}</div>

    )
    } )
    return <div className="User-list col-3 d-flex flex-wrap mt-5">{listcat}</div>
};