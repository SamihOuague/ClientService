import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product";
import panierReducer from "./features/panier";
import blogReducer from "./features/blog";

export default configureStore({
    reducer: {
        product: productReducer,
        panier: panierReducer,
        blog: blogReducer
    }
});