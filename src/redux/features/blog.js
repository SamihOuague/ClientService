import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: "blog",
    initialState: {
        article: []
    },
    reducers: {
        addArticle: (state, action) => {
            state.article.push(action.payload);
        }
    }
});

export const { addArticle } = blogSlice.actions;

export default blogSlice.reducer;