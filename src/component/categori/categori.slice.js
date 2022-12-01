import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: true,
};

export const loadCategories = createAsyncThunk(
    "categories",
    async (args, thunkApi) => {
        const response = await fetch(

            "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
            {
                headers: {
                    'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            }
        );
        const data = await response.json();

        return data;
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCategories.fulfilled, (state, action) => {
            return {
                data: action.payload,
                loading: false,
            };
        });
    },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesSelector = (state) => state.categories;