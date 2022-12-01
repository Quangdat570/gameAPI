import { useEffect } from "react";
import { Outlet } from "react-router-dom";



import { useDispatch, useSelector } from "react-redux";



import { loadGames } from "./store/feautes/cart/List.slice";

function App() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        
        dispatch(loadGames());
    }, []);

    return (
        <div className="app">
           
            <Outlet />

            

            
        </div>
    );
}

export default App;