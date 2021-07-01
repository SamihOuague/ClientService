import { createSlice } from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name: "panier",
    initialState: {
        basket: [],
        total: 0,
        showB: false
    },
    reducers: {
        addToBask: (state, action) => {
            state.basket.push({...action.payload});
        },
        showBask: (state) => {
            state.showB = true; 
        },
        hideBask: (state) => {
            state.showB = false;
        }
    }
});

export const { addToBask, showBask, hideBask } = panierSlice.actions;

export default panierSlice.reducer;