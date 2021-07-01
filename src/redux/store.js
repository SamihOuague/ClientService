import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import productReducer from "./features/product";
import panierReducer from "./features/panier";

export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        panier: panierReducer
    }
});