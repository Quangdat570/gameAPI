import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
    filter: "all",
};

export const loadGames = createAsyncThunk("games", async (args, api) => {
    const res = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
            headers: {
                'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            },
        }
        
        );
    const data = await res.json();

    return data;
});

// export const createTodo = createAsyncThunk("todos/create", async (todo) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(todo),
//     });

//     const data = await res.json();

//     return data;
// });

const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadGames.fulfilled, (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        });

        // builder.addCase(createTodo.fulfilled, (state, action) => {
        //     return {
        //         ...state,
        //         data: [...state.data, action.payload],
        //     };
        // });
    },
});

export const gameReducer = gameSlice.reducer;
export const selectGames = (state) => state.games;