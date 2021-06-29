import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        fshow: false
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push({...action.payload, id: 0});
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((value, index) => {
                return value.id === action.payload;
            });
        },
        showForm: (state) => {
            state.fshow = !state.fshow;
        }
    }
});

export const { addProduct, deleteProduct, showForm } = productSlice.actions;

export default productSlice.reducer;