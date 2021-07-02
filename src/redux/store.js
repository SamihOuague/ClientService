import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product";
import panierReducer from "./features/panier";

export default configureStore({
    reducer: {
        product: productReducer,
        panier: panierReducer
    }
});