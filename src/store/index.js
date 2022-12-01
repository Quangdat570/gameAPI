import { configureStore } from "@reduxjs/toolkit";

import { gameReducer } from "./feautes/cart/List.slice";
import { categoriesReducer } from "../component/categori/categori.slice";

import { infoReducer } from "../pages/info/info.slice";



const store = configureStore({
    reducer: {
       
        games: gameReducer,
        categorys: categoriesReducer,
        infos: infoReducer,
        
        
    },
});

export default store;